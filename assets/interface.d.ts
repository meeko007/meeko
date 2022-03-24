
/**
 * This decleration makes typescript able to interpet .svg files
 */
 declare module "\*.svg" {
	import React = require("react");
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
  }
  