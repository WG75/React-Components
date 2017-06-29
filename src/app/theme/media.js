const mediaQueries = {
	any: 'screen',
	mobilePortrait: `(max-width: 767px) and (orientation: portrait)`,
	mobileLandscape: `(max-width: 1019px) and (orientation: landscape)`,
	tabletPortrait: '(min-width: 768px) and (orientation: portrait)',
	tabletLandscape: `(min-width: 1020px) and (max-width: 1259px) and (orientation: landscape)`,
	desktopLandscape: '(min-width: 1260px) and (max-width: 1643px) and (orientation: landscape)',
	desktop: '(min-width: 1260px) and (orientation: landscape)',
};
mediaQueries.mobile = `${mediaQueries.mobilePortrait}, ${mediaQueries.mobileLandscape}`;
mediaQueries.tablet = `${mediaQueries.tabletPortrait}, ${mediaQueries.tabletLandscape}`;

export default mediaQueries;
