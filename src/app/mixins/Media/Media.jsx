import React, {Component} from 'react';
import mediaQueries from '../../theme/media';
import shallowCompare from 'react-addons-shallow-compare';


function resetMedia(mediaQ) {
	const media = {};
	for (const i in mediaQ) {
		if ({}.hasOwnProperty.call(mediaQ, i)) {
			media[i] = false;
		}
	}
	return media;
}


const media = () => {
	return typeof window !== 'undefined' && typeof screen !== 'undefined'
		? (WrappedComponent) => {
			return class Media extends Component {
				constructor(props) {
					super(props);
					this.state = {
						matchMedia: resetMedia(mediaQueries),
						windowHeight: false,
						windowWidth: false,
						windowOuterHeight: false,
						windowOuterWidth: false,
						screenHeight: false,
						screenWidth: false,
						windowOrientation: 'landscape',
						screenOrientation: 'landscape',
					};
				}
				componentDidMount() {
					if ('onorientationchange' in window) {
						window.addEventListener('orientationchange', this.handleResize, false);
					}
					window.addEventListener('resize', this.handleResize, false);
					this.handleResize();
				}
				shouldComponentUpdate(nextProps, nextState) {
					return shallowCompare(this, nextProps, nextState);
				}
				componentWillUnmount() {
					if ('onorientationchange' in window) {
						window.removeEventListener('orientationchange', this.handleResize);
					}
					window.removeEventListener('resize', this.handleResize);
				}
				matchMedia(m) {
					return window.matchMedia(m).matches;
				}
				handleResize = () => {
					setTimeout(()=>{
						const matchMedia = {};
						const windowOrientation = window.matchMedia('(orientation: landscape)') ? 'landscape' : 'portrait';
						const orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
						const screenOrientation = orientation === 'landscape-primary' || orientation === 'landscape-secondary' || Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';

						for (const i in mediaQueries) {
							if ({}.hasOwnProperty.call(mediaQueries, i)) {
								matchMedia[i] = this.matchMedia(mediaQueries[i]);
							}
						}

						this.setState({
							windowHeight: window.innerHeight,
							windowWidth: window.innerWidth,
							windowOuterHeight: window.outerHeight,
							windowOuterWidth: window.outerWidth,
							screenHeight: screenOrientation === 'landscape' ? screen.width : screen.height,
							screenWidth: screenOrientation === 'portrait' ? screen.height : screen.width,
							windowOrientation: windowOrientation,
							screenOrientation: screenOrientation,
							matchMedia: matchMedia,
						});

					}, 0);
				};
				render() {
					const {
						matchMedia,
						windowWidth, windowHeight,
						windowOuterWidth, windowOuterHeight,
						screenWidth, screenHeight,
						screenOrientation,
						windowOrientation,
					} = this.state;
					return (
						<WrappedComponent {...this.props}
							matchMedia={matchMedia}
							mediaWindow={{
								orientation: windowOrientation,
								width: windowWidth, height: windowHeight,
								outerWidth: windowOuterWidth, outerHeight: windowOuterHeight }}
							mediaScreen={{ width: screenWidth, height: screenHeight, orientation: screenOrientation }} />
					);
				}
			};
		}
		: (WrappedComponent) => (props) => <WrappedComponent {...props} matchMedia={{}} mediaWindow={{}} mediaScreen={{}} />;
	};


export default media;
