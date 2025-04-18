// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents, setHtmlAttributes }) => {
  // כיוון ימין לשמאל ושפה
  setHtmlAttributes({ lang: "he", dir: "rtl" });

  // אלמנטים שייכנסו ל־<head>
  setHeadComponents([
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
    <link
      key="n8n-chat-style"
      href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
      rel="stylesheet"
    />,
  ]);

  // אלמנטים שייכנסו לפני סגירת </body>
  setPostBodyComponents([
    <script
      key="n8n-chat"
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
          import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
          createChat({
            webhookUrl: 'https://n8n-4lnr.onrender.com/webhook/dd5c3937-3c39-4a23-b8ab-8a430d56b41c/chat'
          });
        `,
      }}
    />,
  ]);
};
