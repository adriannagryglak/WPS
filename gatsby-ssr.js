/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
const React = require("react")

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Azonix.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="azonixFont"
    />,
    <link
      rel="preload"
      href="/fonts/ArkitypeRegular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="arkitypeRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/ArkitypeLight.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="arkitypeLightFont"
    />,
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
    
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPreBodyComponents([
    <div id="preloader">
      <img src="/images/logogold.png" alt="logo" style={{"height": "calc(3.23625vw + 77.86408px)"}} />
      <div className="preloader_animation"></div>
    </div>
  ])
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}