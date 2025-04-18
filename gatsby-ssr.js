// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents, setHtmlAttributes }) => {
  // כיוון עברית וכיווניות
  setHtmlAttributes({ lang: "he", dir: "rtl" });

  // <head>
  setHeadComponents([
    // מודעת אדסנס
    <meta
      key="google-adsense-account"
      name="google-adsense-account"
      content="ca-pub-8148276210846697"
    />,
    <script
      key="google-adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8148276210846697"
      crossOrigin="anonymous"
    />,
    // CSS של n8n chat
    <link
      key="n8n-chat-style"
      href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
      rel="stylesheet"
    />,
    // CSS מותאם RTL
    <link
      key="chat-rtl-style"
      rel="stylesheet"
      href="/chat-rtl.css"
    />,
  ]);

  // <body> (לפני </body>)
  setPostBodyComponents([
    <script
      key="n8n-chat"
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
          import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
          createChat({
            webhookUrl: 'https://n8n-4lnr.onrender.com/webhook/dd5c3937-3c39-4a23-b8ab-8a430d56b41c/chat',
            defaultLanguage: 'he',
            initialMessages: [
              'שלום אני עורכת הדין מורן! 👋',
              'האם חווית עוולה רפואית?'
            ],
            i18n: {
              he: {
                title: 'שיחת אונליין עם עורך דין! 👋',
                subtitle: 'מרכז הסיוע פועל 24/7.',
                footer: '',
                getStarted: 'שיחה חדשה',
                inputPlaceholder: 'הקלד את שאלתך...',
              }
            }
          });
        `,
      }}
    />,
  ]);
};
