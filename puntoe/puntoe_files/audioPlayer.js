"use strict";define("audioPlayer",["core","santaProps","audioCommon"],function(a,i,t){var e=a.compMixins,o=i.Types,s=t.audioPlayerStates;return{displayName:"AudioPlayer",mixins:[e.skinBasedComp,e.skinInfo,t.audioMixin],propTypes:{compData:o.Component.compData.isRequired},statics:{useSantaTypes:!0},getInitialState:function(){return this.audioVolume=this.props.compData.volume,{$playerState:s.WAITING}},finishedPlayingAudio:function(){this.props.compData.loop?this.playAudio():this.initiatePause()},handleAudioPlayerClick:function(){switch(this.state.$playerState){case s.WAITING:case s.PAUSING:this.initiatePlay();break;case s.PLAYING:this.initiatePause()}},getMediaButtonAriaLabel:function(){switch(this.state.$playerState){case s.WAITING:case s.PAUSING:return"Play";case s.PLAYING:return"Pause"}},getSkinProperties:function(){return this.audioVolume=this.props.compData.volume,this.autoPlay=this.props.compData.autoPlay,this.updateAudioObject(),{"":{role:"application","aria-label":"Application, Audio player, "+this.props.compData.originalFileName},mediaButton:{"aria-label":this.getMediaButtonAriaLabel()+", toggle",onClick:this.handleAudioPlayerClick}}}}});
//# sourceMappingURL=audioPlayer.min.js.map