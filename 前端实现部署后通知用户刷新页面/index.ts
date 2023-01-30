// 1、 通过websocket 和 eventSource 实现
// 2、判断 html script hash值实现
// 地址 https://mp.weixin.qq.com/s/ufKaOeD5qmyy27kcbfwcYA?st=473AF090AD02EAC507E604E96A304EAD4623FCE882BE8CDB2C56C6E2588751A5113941406A209865CCD79B4BE42B05C953E174C12F0E6CA3A9570095C843A48645FF6BF3BE544AAAC5A26C43F61C9D2747855738725DD49A2D0C67054E5070594F5F230C0B2AB650B541F36D6B7B74554EBB8C74BB94880A7C05CB10072E60BDD8035C2BE2AEC447FFAB1A42B50686616A50353E4F39F82B7C49E5B6C004691CCFD8DF90FE0D668E53C814EF9BBA2B3242929732AF4D28D56180A0E72F98DD10C4809B3163D75F195BF1DD56D5A87220&vid=1688858079266021&cst=664E46763F7142E36C54E9643062EFB5A09C6FACB291C07014314BB27FE99DB54E31217A896EC01B659DFE3ED4A2D50F&deviceid=8a583bef-c9c1-449e-b974-2c24c6feea53&version=4.0.0.70098&platform=mac

interface Options {
  timer?: number;
}
export class Updater {
  oldScript: string[]; // 存储第一次script 的hash 信息
  newScript: string[]; // 获取新的值 新的script 的 hash信息
  dispatch: Record<string, Function[]>; // 发布订阅通知用户更新
  constructor(options: Options) {
    this.oldScript = [];
    this.newScript = [];
    this.dispatch = {};
    this.init(); // 初始化
    this.timing(options?.timer); // 轮询
  }
  async init() {
    const html: string = await this.getHtml();
    this.oldScript = this.parserScript(html);
  }
  async getHtml() {
    const html = await fetch("/").then((res) => res.text()); // 读取index html
    return html;
  }

  parserScript(html: string) {
    const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi); // new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/ig)
    return html.match(reg) as string[]; // 匹配script 标签
  }
  // 发布订阅
  on(key: "no-update" | "update", fn: Function) {
    (this.dispatch[key] || (this.dispatch[key] = [])).push(fn);
    return this;
  }
  compare(oldArr: string[], newArr: string[]) {
    const base = oldArr.length;
    const arr = Array.from(new Set(oldArr.concat(newArr)));
    // 如果新旧length一样无更新
    if (arr.length === base) {
      this.dispatch["no-update"].forEach((fn) => {
        fn();
      });
    } else {
      // 更新
      this.dispatch["update"].forEach((fn) => {
        fn();
      });
    }
  }
  timing(timer = 1000) {
    // 轮询
    setInterval(async () => {
      const newHtml = await this.getHtml();
      this.newScript = this.parserScript(newHtml);
      this.compare(this.oldScript, this.newScript);
    }, timer);
  }
}
