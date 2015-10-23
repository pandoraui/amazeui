---
id: index
title: Amaze UI | 中国首个开源 HTML5 跨屏前端框架
titleEn: Amaze UI
permalink: index.html
next: getting-started.html
---



<div id="amz-home">
  <section id="amz-hero">
    <div class="amz-container am-cf">
      <div class="amz-mascot" data-am-scrollspy="{animation: 'slide-left', delay: 100}">
        <img class="am-img-responsive" src="{{staticDomain}}/assets/{{version}}/i/ui/mascot.png" alt="mascot-xiaoMeng"/>
      </div>
      <div class="amz-hero-intro">
        <div class="amz-hero-headings">
          <h1 data-am-scrollspy="{animation:'slide-left'}">Amaze ~ 妹子 UI</h1>
          <h2 data-am-scrollspy="{animation:'slide-right', delay: 500}">中国首个开源 HTML5 跨屏前端框架</h2>
        </div>
        <ul class="github-status">
          <li>
            <a href="https://github.com/allmobilize/amazeui/stargazers" target="_blank">
              <span class="am-icon-star"></span>
              <span id="ghs-stargazers"></span>
              Stars
            </a>
          </li>
          <li>
            <a href="https://github.com/allmobilize/amazeui/network/members" target="_blank">
              <span class="am-icon-code-fork"></span>
              <span id="ghs-forks"></span>
              Forks
            </a>
          </li>
        </ul>
        <div class="amz-q-group">
          交流 Q 群：
          <span class="am-icon-qq">群①-⑦ 已满</span>
          <span class="am-icon-qq">群⑧ 251789449</span>
        </div>
        <div class="amz-btn-started" data-am-scrollspy="{animation:'scale-up', delay: 1500, repeat: false}">
          <a href="/getting-started?_ver={{version}}" class="am-btn am-btn-success am-btn-lg">开始使用</a>
          <a href="https://github.com/allmobilize/amazeui" class="am-btn am-btn-default am-btn-lg">贡献代码</a>
        </div>
      </div>
    </div>
    <div class="amz-notify">
      <form id="subscribe-form">
        <div class="am-g am-g-fixed">
          <div class="col-md-6 am-u-md-6 notify-latest">
            <a href="/download?ver=2.4.2">
              <span class="amz-notify-date">2015-07-06</span>
              <span class="amz-notify-divider">|</span>
              <span>Amaze UI v2.4.2 发布</span>
            </a>
          </div>
          <div class="col-md-4 am-u-md-4 am-text-right subscribe-field">
            <input class="am-form-field ipt-email" id="subscribe-email" type="email" required placeholder="请输入 Email" autocomplete="off"></div>
          <div class="col-md-2 am-u-md-2">
            <button id="subscribe-submit" class="am-btn am-btn-secondary am-btn-block" type="submit">订阅更新</button>
          </div>
          <div class="col-md-6 am-u-md-6 am-alert am-alert-danger subscribe-alert" id="subscribe-msg-error">
            <button type="button" class="am-close">&times;</button>
            <p></p>
          </div>
          <div class="col-md-6 am-u-md-6 am-alert am-alert-warning subscribe-alert" id="subscribe-msg-success">
            <button type="button" class="am-close">&times;</button>
            <p></p>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section class="amz-features">
    <div class="am-g am-g-fixed">
      <div class="col-md-6 am-u-md-6" data-scrollspy="{animation:'slide-left', delay: 0}">
        <img class="am-img-responsive img" src="{{staticDomain}}/assets/{{version}}/i/ui/foundation.png" alt="foundation"/>
        <h2>为移动而生</h2>
        <p>
          Amaze UI 以移动优先（Mobile first）为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。
        </p>
      </div>
      <div class="col-md-6 am-u-md-6" data-scrollspy="{animation:'slide-top', delay: 500}">
        <img class="am-img-responsive" src="{{staticDomain}}/assets/{{version}}/i/ui/web.png" alt="web"/>
        <h2>组件丰富，模块化</h2>
        <p>
          Amaze UI 含近 20 个 CSS 组件、10 个 JS 组件，更有 17 款包含近 60 个主题的 Web 组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。
        </p>
      </div>
    </div>
    <div class="am-g am-g-fixed">
      <div class="col-md-6 am-u-md-6" data-scrollspy="{animation:'slide-right', delay: 1000}">
        <img class="am-img-responsive img" src="{{staticDomain}}/assets/{{version}}/i/ui/chinese.png" alt="chinese"/>
        <h2>本地化支持</h2>
        <p>
          相比国外框架，Amaze UI 关注中文排版，根据用户代理调整字体，实现更好的中文排版效果；兼顾国内主流浏览器及 App 内置浏览器兼容支持。
        </p>
      </div>
      <div class="col-md-6 am-u-md-6" data-scrollspy="{animation:'slide-bottom', delay: 1500}">
        <img class="am-img-responsive img" src="{{staticDomain}}/assets/{{version}}/i/ui/mobile.png" alt="mobile"/>
        <h2>轻量级，高性能</h2>
        <p>
          Amaze UI 面向 HTML5 开发，使用 CSS3 来做动画交互，平滑、高效，更适合移动设备，让 Web 应用更快速载入。
        </p>
      </div>
    </div>
  </section>
  <section class="amz-credits">
    <div class="amz-container">
      <header>
        <h1 data-am-scrollspy="{animation:'fade'}">站在巨人的肩膀上</h1>
        <h2 data-scrollspy="{animation:'slide-bottom', delay: 500}">Amaze UI 汲取了很多优秀的社区资源，通过开源的形式来回馈社区。</h2>
      </header>
    </div>
    <div class="am-g am-g-fixed amz-credits-list">
      <div class="col-md-4 am-u-md-4" data-scrollspy="{animation:'scale-up', delay: 1000}">
        <h2>MIT License</h2>
        <p>
          Amaze UI 使用
          <a href="https://github.com/allmobilize/amazeui/blob/master/LICENSE.md" target="_blank">MIT 许可证</a>
          发布，用户可以自由使用、复制、修改、合并、出版发行、散布、再授权及贩售 Amaze UI 及其副本。
        </p>
      </div>
      <div class="col-md-4 am-u-md-4" data-scrollspy="{animation:'scale-up', delay: 1500}">
        <h2>Heroes</h2>
        <p>
          <a href="https://github.com/allmobilize/amazeui#%E5%8F%82%E8%80%83%E4%BD%BF%E7%94%A8%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE" target="_blank">参考、使用的项目</a>
          ：jQuery, Zepto.js, Seajs, LESS, normalize.css, FontAwesome, Bootstrap, Foundation, UIKit, Pure, Framework7, etc.
        </p>
      </div>
      <div class="col-md-4 am-u-md-4" data-scrollspy="{animation:'scale-up', delay: 2000}">
        <h2>Credits</h2>
        <p>
          我们追求卓越，然时间、经验、能力有限。Amaze UI 有很多不足的地方，希望大家包容、不吝赐教，给我们提意见、建议。
          <a href="https://github.com/allmobilize/amazeui/wiki/Credits" target="_blank">感谢你们</a>
          ！
        </p>
      </div>
    </div>
  </section>
</div>