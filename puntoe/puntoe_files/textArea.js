"use strict";define("textArea",["core","lodash","textCommon","santaProps"],function(t,e,i,a){var n=t.compMixins,s=function(t,e){switch(t){case"left":return{paddingLeft:e,paddingRight:10};case"right":return{paddingLeft:10,paddingRight:e};case"center":return{paddingRight:e,paddingLeft:e}}},o=function(e){return t.compMixins.validatableMixin.getPublicState(e)};return{displayName:"TextArea",mixins:[n.skinBasedComp,n.runTimeCompData,i.textScaleMixin,t.compMixins.inputFocusMixin,t.compMixins.validatableMixin.validatable,t.compMixins.compStateMixin(o)],propTypes:{compData:a.Types.Component.compData,compProp:a.Types.Component.compProp,shouldResetComponent:a.Types.RenderFlags.shouldResetComponent},statics:{useSantaTypes:!0,behaviors:e.assign({},t.compMixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,t.compMixins.validatableMixin.VALIDATABLE_BEHAVIORS)},focus:function(){this.refs.textarea.focus()},blur:function(){this.refs.textarea.blur()},setCustomValidity:function(t){this.refs.textarea.setCustomValidity(t)},getInitialState:function(){return e.assign(this.getCssState(this.props),o(),{value:this.props.compData.value})},getCssState:function(t){return{$validation:t.compProp.message?"invalid":"valid",$label:t.compProp.label?"hasLabel":"noLabel"}},componentWillReceiveProps:function(t){t.shouldResetComponent&&t.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var i=this.getCssState(t);e.has(t.compData,"value")&&t.compData.value!==this.state.value&&(i.value=t.compData.value),this.setState(i)},onClick:function(t){this.props.compProp.isPreset&&t.target.select()},onKeyDown:function(t){this.handleAction("keyPress",t),t.stopPropagation()},onChange:function(t){var e=t.target.value;e!==this.state.value&&this.setState({value:e},function(){this.updateData({value:e}),this.handleAction("change",t)}.bind(this))},onFocus:function(t){this.handleAction("focus",t)},onBlur:function(t){this.handleAction("blur",t),this.showValidityIndication()},getSkinProperties:function(){var t=this.props.compProp,i=this.props.compData,a={style:{display:"none"}},n={"with-validation-indication":this.shouldShowValidityIndication()};n[this.props.compProp.textAlignment+"-direction"]=!0;var o={"":{className:this.classSet(n),disabled:t.isDisabled,"data-disabled":t.isDisabled},label:t.label?{children:t.label}:a,textarea:{value:this.state.value,maxLength:i.maxLength,placeholder:t.placeholder,onChange:t.onChange||this.onChange,onClick:this.onClick,onKeyDown:this.onKeyDown,onFocus:this.onFocus,onBlur:t.onBlur||this.onBlur,disabled:t.isDisabled,required:t.required,readOnly:t.readOnly,tabIndex:t.tabIndex,className:"has-custom-focus"},errorMessage:t.message?function(){return{children:t.message,style:{whiteSpace:"normal"}}}():a};return o.textarea=e.merge({style:e.merge(this.getFontSize(),s(t.textAlignment,t.textPadding))},o.textarea,{"data-preview":e.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()}),o}}});
//# sourceMappingURL=textArea.min.js.map