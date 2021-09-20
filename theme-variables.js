/*
 * Custom function used to generate the output of the theme variables; more about it can be found at https://getpublii.com/dev/theme-variables/
 */

var generateThemeVariables = function(params) {
    return `
        html {
            --bg-color: ${params.bgColor};
			--header-color: ${params.headerColor};
			--header-text-color: ${params.headerTextColor};
			--header-text-hover-color: ${params.headerTextHoverColor};
			--link-color: ${params.linkColor};
			--link-hover-color: ${params.linkHoverColor};
			--pagenav-color: ${params.pageNavColor};
			--pagenav-text-color: ${params.pageNavTextColor};
			--pagenav-text-hover-color: ${params.pageNavTextHoverColor};
			--pagenav-inactive-color: ${params.pageNavInactiveColor};
            --main-font-size: ${params.fontSize}px;
			--img-size: ${params.imgSize}%;
        }
    `;
};

module.exports = generateThemeVariables;