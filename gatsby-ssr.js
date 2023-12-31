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
    
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPreBodyComponents([
    <div id="preloader">
      <img src="/images/logo-gold.png" alt="logo" style={{"height": "calc(3.23625vw + 77.86408px)"}} />
      <div className="preloader_animation"></div>
    </div>
  ])
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}