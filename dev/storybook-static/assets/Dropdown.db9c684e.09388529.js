import{am as pe,a as p,as as ke,at as ue,au as te,av as De,a3 as g,aw as he,a4 as me,ax as W,ay as Ce,az as Ie,Z as Se,aA as Oe,aB as Re,aC as Ne,aD as Ee,aE as He,aF as Pe,aG as O,aH as Te,aI as Me,aJ as We,_ as Be,ab as Le,a1 as Ke,a2 as Fe,aK as ze,aL as Ae,aM as Ue,aN as qe,aO as Ze,ao as y,aP as Ge,aQ as U,an as be,aR as ee,aS as re,aT as je,aU as ne,aV as se,aW as $e,aX as Xe,ah as Qe}from"./iframe.e24182c1.js";import{o as Ve}from"./Panel.98c00fb5.388b69ab.js";var Je=function(n){var a;return function(t){a||(a=new Set,Oe(n,{componentWillUnmount:function(){a.forEach(function(s){return cancelAnimationFrame(s)})}}));var e=requestAnimationFrame(function(){a.delete(e),t()});a.add(e)}},Ye=pe(),fe=p.exports.forwardRef(function(n,a){var t=n.disabled,e=n.required,s=n.inputProps,o=n.name,r=n.ariaLabel,i=n.ariaLabelledBy,d=n.ariaDescribedBy,m=n.ariaPositionInSet,_=n.ariaSetSize,l=n.title,h=n.checkmarkIconProps,u=n.styles,k=n.theme,T=n.className,N=n.boxSide,x=N===void 0?"start":N,v=ke("checkbox-",n.id),E=p.exports.useRef(null),C=ue(E,a),H=p.exports.useRef(null),R=te(n.checked,n.defaultChecked,n.onChange),w=R[0],b=R[1],I=te(n.indeterminate,n.defaultIndeterminate),c=I[0],S=I[1];De(E),eo(n,w,c,H);var D=Ye(u,{theme:k,className:T,disabled:t,indeterminate:c,checked:w,reversed:x!=="start",isUsingCustomLabelRender:!!n.onRenderLabel}),K=function(P){c?(b(!!w,P),S(!1)):b(!w,P)},f=p.exports.useCallback(function(P){return P&&P.label?p.exports.createElement("span",{className:D.text,title:P.title},P.label):null},[D.text]),F=n.onRenderLabel||f,B=c?"mixed":void 0,M=g(g({className:D.input,type:"checkbox"},s),{checked:!!w,disabled:t,required:e,name:o,id:v,title:l,onChange:K,"aria-disabled":t,"aria-label":r,"aria-labelledby":i,"aria-describedby":d,"aria-posinset":m,"aria-setsize":_,"aria-checked":B});return p.exports.createElement("div",{className:D.root,title:l,ref:C},p.exports.createElement("input",g({},M,{ref:H,title:l,"data-ktp-execute-target":!0})),p.exports.createElement("label",{className:D.label,htmlFor:v},p.exports.createElement("div",{className:D.checkbox,"data-ktp-target":!0},p.exports.createElement(he,g({iconName:"CheckMark"},h,{className:D.checkmark}))),F(n,f)))});fe.displayName="CheckboxBase";function eo(n,a,t,e){p.exports.useImperativeHandle(n.componentRef,function(){return{get checked(){return!!a},get indeterminate(){return!!t},focus:function(){e.current&&e.current.focus()}}},[e,a,t])}var oo={root:"ms-Checkbox",label:"ms-Checkbox-label",checkbox:"ms-Checkbox-checkbox",checkmark:"ms-Checkbox-checkmark",text:"ms-Checkbox-text"},ie="20px",ae="200ms",de="cubic-bezier(.4, 0, .23, 1)",to=function(n){var a,t,e,s,o,r,i,d,m,_,l,h,u,k,T,N,x,v,E=n.className,C=n.theme,H=n.reversed,R=n.checked,w=n.disabled,b=n.isUsingCustomLabelRender,I=n.indeterminate,c=C.semanticColors,S=C.effects,D=C.palette,K=C.fonts,f=be(oo,C),F=c.inputForegroundChecked,B=D.neutralSecondary,M=D.neutralPrimary,P=c.inputBackgroundChecked,G=c.inputBackgroundChecked,q=c.disabledBodySubtext,j=c.inputBorderHovered,Z=c.inputBackgroundCheckedHovered,z=c.inputBackgroundChecked,A=c.inputBackgroundCheckedHovered,oe=c.inputBackgroundCheckedHovered,ve=c.inputTextHovered,ge=c.disabledBodySubtext,xe=c.bodyText,we=c.disabledText,ye=[(a={content:'""',borderRadius:S.roundedCorner2,position:"absolute",width:10,height:10,top:4,left:4,boxSizing:"border-box",borderWidth:5,borderStyle:"solid",borderColor:w?q:P,transitionProperty:"border-width, border, border-color",transitionDuration:ae,transitionTimingFunction:de},a[y]={borderColor:"WindowText"},a)];return{root:[f.root,{position:"relative",display:"flex"},H&&"reversed",R&&"is-checked",!w&&"is-enabled",w&&"is-disabled",!w&&[!R&&(t={},t[":hover ."+f.checkbox]=(e={borderColor:j},e[y]={borderColor:"Highlight"},e),t[":focus ."+f.checkbox]={borderColor:j},t[":hover ."+f.checkmark]=(s={color:B,opacity:"1"},s[y]={color:"Highlight"},s),t),R&&!I&&(o={},o[":hover ."+f.checkbox]={background:A,borderColor:oe},o[":focus ."+f.checkbox]={background:A,borderColor:oe},o[y]=(r={},r[":hover ."+f.checkbox]={background:"Highlight",borderColor:"Highlight"},r[":focus ."+f.checkbox]={background:"Highlight"},r[":focus:hover ."+f.checkbox]={background:"Highlight"},r[":focus:hover ."+f.checkmark]={color:"Window"},r[":hover ."+f.checkmark]={color:"Window"},r),o),I&&(i={},i[":hover ."+f.checkbox+", :hover ."+f.checkbox+":after"]=(d={borderColor:Z},d[y]={borderColor:"WindowText"},d),i[":focus ."+f.checkbox]={borderColor:Z},i[":hover ."+f.checkmark]={opacity:"0"},i),(m={},m[":hover ."+f.text+", :focus ."+f.text]=(_={color:ve},_[y]={color:w?"GrayText":"WindowText"},_),m)],E],input:(l={position:"absolute",background:"none",opacity:0},l["."+ee+" &:focus + label::before"]=(h={outline:"1px solid "+C.palette.neutralSecondary,outlineOffset:"2px"},h[y]={outline:"1px solid WindowText"},h),l),label:[f.label,C.fonts.medium,{display:"flex",alignItems:b?"center":"flex-start",cursor:w?"default":"pointer",position:"relative",userSelect:"none"},H&&{flexDirection:"row-reverse",justifyContent:"flex-end"},{"&::before":{position:"absolute",left:0,right:0,top:0,bottom:0,content:'""',pointerEvents:"none"}}],checkbox:[f.checkbox,(u={position:"relative",display:"flex",flexShrink:0,alignItems:"center",justifyContent:"center",height:ie,width:ie,border:"1px solid "+M,borderRadius:S.roundedCorner2,boxSizing:"border-box",transitionProperty:"background, border, border-color",transitionDuration:ae,transitionTimingFunction:de,overflow:"hidden",":after":I?ye:null},u[y]=g({borderColor:"WindowText"},U()),u),I&&{borderColor:P},H?{marginLeft:4}:{marginRight:4},!w&&!I&&R&&(k={background:z,borderColor:G},k[y]={background:"Highlight",borderColor:"Highlight"},k),w&&(T={borderColor:q},T[y]={borderColor:"GrayText"},T),R&&w&&(N={background:ge,borderColor:q},N[y]={background:"Window"},N)],checkmark:[f.checkmark,(x={opacity:R&&!I?"1":"0",color:F},x[y]=g({color:w?"GrayText":"Window"},U()),x)],text:[f.text,(v={color:w?we:xe,fontSize:K.medium.fontSize,lineHeight:"20px"},v[y]=g({color:w?"GrayText":"WindowText"},U()),v),H?{marginRight:4}:{marginLeft:4}]}},ro=me(fe,to,void 0,{scope:"Checkbox"});function le(n,a){for(var t=[],e=0,s=a;e<s.length;e++){var o=s[e],r=n[o];r&&t.push(r)}return t}var L;(function(n){n[n.Normal=0]="Normal",n[n.Divider=1]="Divider",n[n.Header=2]="Header",n[n.SelectAll=3]="SelectAll"})(L||(L={}));var no=function(){function n(){this._size=0}return n.prototype.updateOptions=function(a){for(var t=[],e=0,s=0;s<a.length;s++)a[s].itemType===L.Divider||a[s].itemType===L.Header?t.push(s):a[s].hidden||e++;this._size=e,this._displayOnlyOptionsCache=t,this._cachedOptions=W([],a)},Object.defineProperty(n.prototype,"optionSetSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"cachedOptions",{get:function(){return this._cachedOptions},enumerable:!1,configurable:!0}),n.prototype.positionInSet=function(a){if(a!==void 0){for(var t=0;a>this._displayOnlyOptionsCache[t];)t++;if(this._displayOnlyOptionsCache[t]===a)throw new Error("Unexpected: Option at index "+a+" is not a selectable element.");return a-t+1}},n}(),so=pe(),io={options:[]};function ao(n){var a=n.defaultSelectedKeys,t=n.selectedKeys,e=n.defaultSelectedKey,s=n.selectedKey,o=n.options,r=n.multiSelect,i=re(o),d=p.exports.useState([]),m=d[0],_=d[1],l,h=o!==i;r?h&&a!==void 0?l=a:l=t:h&&e!==void 0?l=e:l=s;var u=re(l);return p.exports.useEffect(function(){var k=function(){if(l===void 0){if(r)return T();var x=N(null);return x!==-1?[x]:[]}else if(!Array.isArray(l)){var x=N(l);return x!==-1?[x]:[]}for(var v=[],E=0,C=l;E<C.length;E++){var H=C[E],x=N(H);x!==-1&&v.push(x)}return v},T=function(){return o.map(function(x,v){return x.selected?v:-1}).filter(function(x){return x!==-1})},N=function(x){return je(o,function(v){return x!=null?v.key===x:!!v.selected||!!v.isSelected})};(l!==void 0||!i)&&(l!==u||h)&&_(k())},[h,r,i,u,o,l]),[m,_]}var _e=p.exports.forwardRef(function(n,a){var t=Ce(io,n),e=p.exports.useRef(null),s=ue(a,e),o=Ie(e,t.responsiveMode),r=ao(t),i=r[0],d=r[1];return p.exports.createElement(lo,g({},t,{responsiveMode:o,hoisted:{rootRef:s,selectedIndices:i,setSelectedIndices:d}}))});_e.displayName="DropdownBase";var lo=function(n){Se(a,n);function a(t){var e=n.call(this,t)||this;e._host=p.exports.createRef(),e._focusZone=p.exports.createRef(),e._dropDown=p.exports.createRef(),e._scrollIdleDelay=250,e._sizePosCache=new no,e._requestAnimationFrame=Je(e),e._onChange=function(o,r,i,d,m){var _=e.props,l=_.onChange,h=_.onChanged;if(l||h){var u=m?g(g({},r[i]),{selected:!d}):r[i];l&&l(g(g({},o),{target:e._dropDown.current}),u,i),h&&h(u,i)}},e._getPlaceholder=function(){return e.props.placeholder||e.props.placeHolder},e._getTitle=function(o,r){var i=e.props.multiSelectDelimiter,d=i===void 0?", ":i;return o.map(function(m){return m.text}).join(d)},e._onRenderTitle=function(o){return p.exports.createElement(p.exports.Fragment,null,e._getTitle(o))},e._onRenderPlaceholder=function(o){return e._getPlaceholder()?p.exports.createElement(p.exports.Fragment,null,e._getPlaceholder()):null},e._onRenderContainer=function(o){var r=o.calloutProps,i=o.panelProps,d=e.props,m=d.responsiveMode,_=d.dropdownWidth,l=m<=Re.medium,h=e._classNames.subComponentStyles?e._classNames.subComponentStyles.panel:void 0,u=void 0,k=void 0;return _==="auto"?k=e._dropDown.current?e._dropDown.current.clientWidth:0:u=_||(e._dropDown.current?e._dropDown.current.clientWidth:0),l?p.exports.createElement(Ve,g({isOpen:!0,isLightDismiss:!0,onDismiss:e._onDismiss,hasCloseButton:!1,styles:h},i),e._renderFocusableList(o)):p.exports.createElement(Ne,g({isBeakVisible:!1,gapSpace:0,doNotLayer:!1,directionalHintFixed:!1,directionalHint:Ee.bottomLeftEdge,calloutWidth:u,calloutMinWidth:k},r,{className:e._classNames.callout,target:e._dropDown.current,onDismiss:e._onDismiss,onScroll:e._onScroll,onPositioned:e._onPositioned}),e._renderFocusableList(o))},e._onRenderCaretDown=function(o){return p.exports.createElement(he,{className:e._classNames.caretDown,iconName:"ChevronDown","aria-hidden":!0})},e._onRenderList=function(o){var r=o.onRenderItem,i=r===void 0?e._onRenderItem:r,d={items:[]},m=[],_=function(){var h=d.id?[p.exports.createElement("div",{role:"group",key:d.id,"aria-labelledby":d.id},d.items)]:d.items;m=W(W([],m),h),d={items:[]}},l=function(h,u){switch(h.itemType){case L.Header:d.items.length>0&&_();var k=e._id+h.key;d.items.push(i(g(g({id:k},h),{index:u}),e._onRenderItem)),d.id=k;break;case L.Divider:u>0&&d.items.push(i(g(g({},h),{index:u}),e._onRenderItem)),d.items.length>0&&_();break;default:d.items.push(i(g(g({},h),{index:u}),e._onRenderItem))}};return o.options.forEach(function(h,u){l(h,u)}),d.items.length>0&&_(),p.exports.createElement(p.exports.Fragment,null,m)},e._onRenderItem=function(o){switch(o.itemType){case L.Divider:return e._renderSeparator(o);case L.Header:return e._renderHeader(o);default:return e._renderOption(o)}},e._renderOption=function(o){var r=e.props,i=r.onRenderOption,d=i===void 0?e._onRenderOption:i,m=r.hoisted.selectedIndices,_=m===void 0?[]:m,l=o.index!==void 0&&_?_.indexOf(o.index)>-1:!1,h=o.hidden?e._classNames.dropdownItemHidden:l&&o.disabled===!0?e._classNames.dropdownItemSelectedAndDisabled:l?e._classNames.dropdownItemSelected:o.disabled===!0?e._classNames.dropdownItemDisabled:e._classNames.dropdownItem,u=o.title,k=e._classNames.subComponentStyles?e._classNames.subComponentStyles.multiSelectItem:void 0;return e.props.multiSelect?p.exports.createElement(ro,{id:e._listId+o.index,key:o.key,disabled:o.disabled,onChange:e._onItemClick(o),inputProps:g({"aria-selected":l,onMouseEnter:e._onItemMouseEnter.bind(e,o),onMouseLeave:e._onMouseItemLeave.bind(e,o),onMouseMove:e._onItemMouseMove.bind(e,o),role:"option"},{"data-index":o.index,"data-is-focusable":!o.disabled}),label:o.text,title:u,onRenderLabel:e._onRenderItemLabel.bind(e,o),className:h,checked:l,styles:k,ariaPositionInSet:e._sizePosCache.positionInSet(o.index),ariaSetSize:e._sizePosCache.optionSetSize,ariaLabel:o.ariaLabel}):p.exports.createElement(He,{id:e._listId+o.index,key:o.key,"data-index":o.index,"data-is-focusable":!o.disabled,disabled:o.disabled,className:h,onClick:e._onItemClick(o),onMouseEnter:e._onItemMouseEnter.bind(e,o),onMouseLeave:e._onMouseItemLeave.bind(e,o),onMouseMove:e._onItemMouseMove.bind(e,o),role:"option","aria-selected":l?"true":"false",ariaLabel:o.ariaLabel,title:u,"aria-posinset":e._sizePosCache.positionInSet(o.index),"aria-setsize":e._sizePosCache.optionSetSize},d(o,e._onRenderOption))},e._onRenderOption=function(o){return p.exports.createElement("span",{className:e._classNames.dropdownOptionText},o.text)},e._onRenderItemLabel=function(o){var r=e.props.onRenderOption,i=r===void 0?e._onRenderOption:r;return i(o,e._onRenderOption)},e._onPositioned=function(o){e._focusZone.current&&e._requestAnimationFrame(function(){var r=e.props.hoisted.selectedIndices;if(e._focusZone.current)if(!e._hasBeenPositioned&&r&&r[0]&&!e.props.options[r[0]].disabled){var i=Pe().getElementById(e._id+"-list"+r[0]);i&&e._focusZone.current.focusElement(i),e._hasBeenPositioned=!0}else e._focusZone.current.focus()}),(!e.state.calloutRenderEdge||e.state.calloutRenderEdge!==o.targetEdge)&&e.setState({calloutRenderEdge:o.targetEdge})},e._onItemClick=function(o){return function(r){o.disabled||(e.setSelectedIndex(r,o.index),e.props.multiSelect||e.setState({isOpen:!1}))}},e._onScroll=function(){!e._isScrollIdle&&e._scrollIdleTimeoutId!==void 0?(clearTimeout(e._scrollIdleTimeoutId),e._scrollIdleTimeoutId=void 0):e._isScrollIdle=!1,e._scrollIdleTimeoutId=window.setTimeout(function(){e._isScrollIdle=!0},e._scrollIdleDelay)},e._onMouseItemLeave=function(o,r){if(!e._shouldIgnoreMouseEvent()&&e._host.current)if(e._host.current.setActive)try{e._host.current.setActive()}catch{}else e._host.current.focus()},e._onDismiss=function(){e.setState({isOpen:!1})},e._onDropdownBlur=function(o){var r=e._isDisabled();r||e.state.isOpen||(e.setState({hasFocus:!1}),e.props.onBlur&&e.props.onBlur(o))},e._onDropdownKeyDown=function(o){var r=e._isDisabled();if(!r&&(e._lastKeyDownWasAltOrMeta=e._isAltOrMeta(o),!(e.props.onKeyDown&&(e.props.onKeyDown(o),o.defaultPrevented)))){var i,d=e.props.hoisted.selectedIndices.length?e.props.hoisted.selectedIndices[0]:-1,m=o.altKey||o.metaKey,_=e.state.isOpen;switch(o.which){case O.enter:e.setState({isOpen:!_});break;case O.escape:if(!_)return;e.setState({isOpen:!1});break;case O.up:if(m){if(_){e.setState({isOpen:!1});break}return}e.props.multiSelect?e.setState({isOpen:!0}):e._isDisabled()||(i=e._moveIndex(o,-1,d-1,d));break;case O.down:m&&(o.stopPropagation(),o.preventDefault()),m&&!_||e.props.multiSelect?e.setState({isOpen:!0}):e._isDisabled()||(i=e._moveIndex(o,1,d+1,d));break;case O.home:e.props.multiSelect||(i=e._moveIndex(o,1,0,d));break;case O.end:e.props.multiSelect||(i=e._moveIndex(o,-1,e.props.options.length-1,d));break;case O.space:break;default:return}i!==d&&(o.stopPropagation(),o.preventDefault())}},e._onDropdownKeyUp=function(o){var r=e._isDisabled();if(!r){var i=e._shouldHandleKeyUp(o),d=e.state.isOpen;if(!(e.props.onKeyUp&&(e.props.onKeyUp(o),o.defaultPrevented))){switch(o.which){case O.space:e.setState({isOpen:!d});break;default:i&&d&&e.setState({isOpen:!1});return}o.stopPropagation(),o.preventDefault()}}},e._onZoneKeyDown=function(o){var r;e._lastKeyDownWasAltOrMeta=e._isAltOrMeta(o);var i=o.altKey||o.metaKey;switch(o.which){case O.up:i?e.setState({isOpen:!1}):e._host.current&&(r=Me(e._host.current,e._host.current.lastChild,!0));break;case O.home:case O.end:case O.pageUp:case O.pageDown:break;case O.down:!i&&e._host.current&&(r=Te(e._host.current,e._host.current.firstChild,!0));break;case O.escape:e.setState({isOpen:!1});break;case O.tab:e.setState({isOpen:!1});return;default:return}r&&r.focus(),o.stopPropagation(),o.preventDefault()},e._onZoneKeyUp=function(o){var r=e._shouldHandleKeyUp(o);r&&e.state.isOpen&&(e.setState({isOpen:!1}),o.preventDefault())},e._onDropdownClick=function(o){if(!(e.props.onClick&&(e.props.onClick(o),o.defaultPrevented))){var r=e.state.isOpen,i=e._isDisabled();!i&&!e._shouldOpenOnFocus()&&e.setState({isOpen:!r}),e._isFocusedByClick=!1}},e._onDropdownMouseDown=function(){e._isFocusedByClick=!0},e._onFocus=function(o){var r=e._isDisabled();if(!r){e.props.onFocus&&e.props.onFocus(o);var i={hasFocus:!0};e._shouldOpenOnFocus()&&(i.isOpen=!0),e.setState(i)}},e._isDisabled=function(){var o=e.props.disabled,r=e.props.isDisabled;return o===void 0&&(o=r),o},e._onRenderLabel=function(o){var r=o.label,i=o.required,d=o.disabled,m=e._classNames.subComponentStyles?e._classNames.subComponentStyles.label:void 0;return r?p.exports.createElement(We,{className:e._classNames.label,id:e._labelId,required:i,styles:m,disabled:d},r):null},Be(e),t.multiSelect,t.selectedKey,t.selectedKeys,t.defaultSelectedKey,t.defaultSelectedKeys;var s=t.options;return e._id=t.id||Le("Dropdown"),e._labelId=e._id+"-label",e._listId=e._id+"-list",e._optionId=e._id+"-option",e._isScrollIdle=!0,e._hasBeenPositioned=!1,e._sizePosCache.updateOptions(s),e.state={isOpen:!1,hasFocus:!1,calloutRenderEdge:void 0},e}return Object.defineProperty(a.prototype,"selectedOptions",{get:function(){var t=this.props,e=t.options,s=t.hoisted.selectedIndices;return le(e,s)},enumerable:!1,configurable:!0}),a.prototype.componentWillUnmount=function(){clearTimeout(this._scrollIdleTimeoutId)},a.prototype.componentDidUpdate=function(t,e){e.isOpen===!0&&this.state.isOpen===!1&&(this._gotMouseMove=!1,this._hasBeenPositioned=!1,this.props.onDismiss&&this.props.onDismiss())},a.prototype.render=function(){var t=this._id,e=this.props,s=e.className,o=e.label,r=e.options,i=e.ariaLabel,d=e.required,m=e.errorMessage,_=e.styles,l=e.theme,h=e.panelProps,u=e.calloutProps,k=e.onRenderTitle,T=k===void 0?this._getTitle:k,N=e.onRenderContainer,x=N===void 0?this._onRenderContainer:N,v=e.onRenderCaretDown,E=v===void 0?this._onRenderCaretDown:v,C=e.onRenderLabel,H=C===void 0?this._onRenderLabel:C,R=e.hoisted.selectedIndices,w=this.state,b=w.isOpen,I=w.calloutRenderEdge,c=w.hasFocus,S=e.onRenderPlaceholder||e.onRenderPlaceHolder||this._getPlaceholder;r!==this._sizePosCache.cachedOptions&&this._sizePosCache.updateOptions(r);var D=le(r,R),K=Ke(e,Fe),f=this._isDisabled(),F=t+"-errorMessage",B=f?void 0:b&&R.length===1&&R[0]>=0?this._listId+R[0]:void 0;this._classNames=so(_,{theme:l,className:s,hasError:!!(m&&m.length>0),hasLabel:!!o,isOpen:b,required:d,disabled:f,isRenderingPlaceholder:!D.length,panelClassName:h?h.className:void 0,calloutClassName:u?u.className:void 0,calloutRenderEdge:I});var M=!!m&&m.length>0;return p.exports.createElement("div",{className:this._classNames.root,ref:this.props.hoisted.rootRef,"aria-owns":b?this._listId:void 0},H(this.props,this._onRenderLabel),p.exports.createElement("div",g({"data-is-focusable":!f,"data-ktp-target":!0,ref:this._dropDown,id:t,tabIndex:f?-1:0,role:"combobox","aria-haspopup":"listbox","aria-expanded":b?"true":"false","aria-label":i,"aria-labelledby":o&&!i?ze(this._labelId,this._optionId):void 0,"aria-describedby":M?this._id+"-errorMessage":void 0,"aria-activedescendant":B,"aria-required":d,"aria-disabled":f,"aria-controls":b?this._listId:void 0},K,{className:this._classNames.dropdown,onBlur:this._onDropdownBlur,onKeyDown:this._onDropdownKeyDown,onKeyUp:this._onDropdownKeyUp,onClick:this._onDropdownClick,onMouseDown:this._onDropdownMouseDown,onFocus:this._onFocus}),p.exports.createElement("span",{id:this._optionId,className:this._classNames.title,"aria-live":c?"polite":void 0,"aria-atomic":c?!0:void 0,"aria-invalid":M},D.length?T(D,this._onRenderTitle):S(e,this._onRenderPlaceholder)),p.exports.createElement("span",{className:this._classNames.caretDownWrapper},E(e,this._onRenderCaretDown))),b&&x(g(g({},e),{onDismiss:this._onDismiss}),this._onRenderContainer),M&&p.exports.createElement("div",{role:"alert",id:F,className:this._classNames.errorMessage},m))},a.prototype.focus=function(t){this._dropDown.current&&(this._dropDown.current.focus(),t&&this.setState({isOpen:!0}))},a.prototype.setSelectedIndex=function(t,e){var s=this.props,o=s.options,r=s.selectedKey,i=s.selectedKeys,d=s.multiSelect,m=s.notifyOnReselect,_=s.hoisted.selectedIndices,l=_===void 0?[]:_,h=l?l.indexOf(e)>-1:!1,u=[];if(e=Math.max(0,Math.min(o.length-1,e)),r!==void 0||i!==void 0){this._onChange(t,o,e,h,d);return}if(!(!d&&!m&&e===l[0])){if(d)if(u=l?this._copyArray(l):[],h){var k=u.indexOf(e);k>-1&&u.splice(k,1)}else u.push(e);else u=[e];t.persist(),this.props.hoisted.setSelectedIndices(u),this._onChange(t,o,e,h,d)}},a.prototype._copyArray=function(t){for(var e=[],s=0,o=t;s<o.length;s++){var r=o[s];e.push(r)}return e},a.prototype._moveIndex=function(t,e,s,o){var r=this.props.options;if(o===s||r.length===0)return o;s>=r.length?s=0:s<0&&(s=r.length-1);for(var i=0;r[s].itemType===L.Header||r[s].itemType===L.Divider||r[s].disabled;){if(i>=r.length)return o;s+e<0?s=r.length:s+e>=r.length&&(s=-1),s=s+e,i++}return this.setSelectedIndex(t,s),s},a.prototype._renderFocusableList=function(t){var e=t.onRenderList,s=e===void 0?this._onRenderList:e,o=t.label,r=t.ariaLabel,i=t.multiSelect;return p.exports.createElement("div",{className:this._classNames.dropdownItemsWrapper,onKeyDown:this._onZoneKeyDown,onKeyUp:this._onZoneKeyUp,ref:this._host,tabIndex:0},p.exports.createElement(Ae,{ref:this._focusZone,direction:Ue.vertical,id:this._listId,className:this._classNames.dropdownItems,role:"listbox","aria-label":r,"aria-labelledby":o&&!r?this._labelId:void 0,"aria-multiselectable":i},s(t,this._onRenderList)))},a.prototype._renderSeparator=function(t){var e=t.index,s=t.key;return e>0?p.exports.createElement("div",{role:"separator",key:s,className:this._classNames.dropdownDivider}):null},a.prototype._renderHeader=function(t){var e=this.props.onRenderOption,s=e===void 0?this._onRenderOption:e,o=t.key,r=t.id;return p.exports.createElement("div",{id:r,key:o,className:this._classNames.dropdownItemHeader},s(t,this._onRenderOption))},a.prototype._onItemMouseEnter=function(t,e){if(!this._shouldIgnoreMouseEvent()){var s=e.currentTarget;s.focus()}},a.prototype._onItemMouseMove=function(t,e){var s=e.currentTarget;this._gotMouseMove=!0,!(!this._isScrollIdle||document.activeElement===s)&&s.focus()},a.prototype._shouldIgnoreMouseEvent=function(){return!this._isScrollIdle||!this._gotMouseMove},a.prototype._isAltOrMeta=function(t){return t.which===O.alt||t.key==="Meta"},a.prototype._shouldHandleKeyUp=function(t){var e=this._lastKeyDownWasAltOrMeta&&this._isAltOrMeta(t);return this._lastKeyDownWasAltOrMeta=!1,!!e&&!(qe()||Ze())},a.prototype._shouldOpenOnFocus=function(){var t=this.state.hasFocus,e=this.props.openOnKeyboardFocus;return!this._isFocusedByClick&&e===!0&&!t},a.defaultProps={options:[]},a}(p.exports.Component),Q,V,J,co={root:"ms-Dropdown-container",label:"ms-Dropdown-label",dropdown:"ms-Dropdown",title:"ms-Dropdown-title",caretDownWrapper:"ms-Dropdown-caretDownWrapper",caretDown:"ms-Dropdown-caretDown",callout:"ms-Dropdown-callout",panel:"ms-Dropdown-panel",dropdownItems:"ms-Dropdown-items",dropdownItem:"ms-Dropdown-item",dropdownDivider:"ms-Dropdown-divider",dropdownOptionText:"ms-Dropdown-optionText",dropdownItemHeader:"ms-Dropdown-header",titleIsPlaceHolder:"ms-Dropdown-titleIsPlaceHolder",titleHasError:"ms-Dropdown-title--hasError"},$=32,Y=36,po=(Q={},Q[y+", "+Ge.replace("@media ","")]=g({},U()),Q),X={selectors:g((V={},V[y]={backgroundColor:"Highlight",borderColor:"Highlight",color:"HighlightText"},V),po)},ce={selectors:(J={},J[y]={borderColor:"Highlight"},J)},uo=Xe(0,Qe),ho=function(n){var a,t,e,s,o,r,i,d,m,_,l,h,u=n.theme,k=n.hasError,T=n.hasLabel,N=n.className,x=n.isOpen,v=n.disabled,E=n.required,C=n.isRenderingPlaceholder,H=n.panelClassName,R=n.calloutClassName,w=n.calloutRenderEdge;if(!u)throw new Error("theme is undefined or null in base Dropdown getStyles function.");var b=be(co,u),I=u.palette,c=u.semanticColors,S=u.effects,D=u.fonts,K={color:c.menuItemTextHovered},f={color:c.menuItemText},F={borderColor:c.errorText},B=[b.dropdownItem,{backgroundColor:"transparent",boxSizing:"border-box",cursor:"pointer",display:"flex",alignItems:"center",padding:"0 8px",width:"100%",minHeight:Y,lineHeight:20,height:0,position:"relative",border:"1px solid transparent",borderRadius:0,wordWrap:"break-word",overflowWrap:"break-word",textAlign:"left",".ms-Button-flexContainer":{width:"100%"}}],M=c.menuItemBackgroundPressed,P=function(z){var A;return z===void 0&&(z=!1),{selectors:(A={"&:hover:focus":[{color:c.menuItemTextHovered,backgroundColor:z?M:c.menuItemBackgroundHovered},X],"&:focus":[{backgroundColor:z?M:"transparent"},X],"&:active":[{color:c.menuItemTextHovered,backgroundColor:z?c.menuItemBackgroundHovered:c.menuBackground},X]},A["."+ee+" &:focus:after"]={left:0,top:0,bottom:0,right:0},A[y]={border:"none"},A)}},G=W(W([],B),[{backgroundColor:M,color:c.menuItemTextHovered},P(!0),X]),q=W(W([],B),[{color:c.disabledText,cursor:"default",selectors:(a={},a[y]={color:"GrayText",border:"none"},a)}]),j=w===ne.bottom?S.roundedCorner2+" "+S.roundedCorner2+" 0 0":"0 0 "+S.roundedCorner2+" "+S.roundedCorner2,Z=w===ne.bottom?"0 0 "+S.roundedCorner2+" "+S.roundedCorner2:S.roundedCorner2+" "+S.roundedCorner2+" 0 0";return{root:[b.root,N],label:b.label,dropdown:[b.dropdown,se,D.medium,{color:c.menuItemText,borderColor:c.focusBorder,position:"relative",outline:0,userSelect:"none",selectors:(t={},t["&:hover ."+b.title]=[!v&&K,{borderColor:x?I.neutralSecondary:I.neutralPrimary},ce],t["&:focus ."+b.title]=[!v&&K,{selectors:(e={},e[y]={color:"Highlight"},e)}],t["&:focus:after"]=[{pointerEvents:"none",content:"''",position:"absolute",boxSizing:"border-box",top:"0px",left:"0px",width:"100%",height:"100%",border:v?"none":"2px solid "+I.themePrimary,borderRadius:"2px",selectors:(s={},s[y]={color:"Highlight"},s)}],t["&:active ."+b.title]=[!v&&K,{borderColor:I.themePrimary},ce],t["&:hover ."+b.caretDown]=!v&&f,t["&:focus ."+b.caretDown]=[!v&&f,{selectors:(o={},o[y]={color:"Highlight"},o)}],t["&:active ."+b.caretDown]=!v&&f,t["&:hover ."+b.titleIsPlaceHolder]=!v&&f,t["&:focus ."+b.titleIsPlaceHolder]=!v&&f,t["&:active ."+b.titleIsPlaceHolder]=!v&&f,t["&:hover ."+b.titleHasError]=F,t["&:active ."+b.titleHasError]=F,t)},x&&"is-open",v&&"is-disabled",E&&"is-required",E&&!T&&{selectors:(r={":before":{content:"'*'",color:c.errorText,position:"absolute",top:-5,right:-10}},r[y]={selectors:{":after":{right:-14}}},r)}],title:[b.title,se,{backgroundColor:c.inputBackground,borderWidth:1,borderStyle:"solid",borderColor:c.inputBorder,borderRadius:x?j:S.roundedCorner2,cursor:"pointer",display:"block",height:$,lineHeight:$-2,padding:"0 28px 0 8px",position:"relative",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},C&&[b.titleIsPlaceHolder,{color:c.inputPlaceholderText}],k&&[b.titleHasError,F],v&&{backgroundColor:c.disabledBackground,border:"none",color:c.disabledText,cursor:"default",selectors:(i={},i[y]=g({border:"1px solid GrayText",color:"GrayText",backgroundColor:"Window"},U()),i)}],caretDownWrapper:[b.caretDownWrapper,{height:$,lineHeight:$-2,paddingTop:1,position:"absolute",right:8,top:0},!v&&{cursor:"pointer"}],caretDown:[b.caretDown,{color:I.neutralSecondary,fontSize:D.small.fontSize,pointerEvents:"none"},v&&{color:c.disabledText,selectors:(d={},d[y]=g({color:"GrayText"},U()),d)}],errorMessage:g(g({color:c.errorText},u.fonts.small),{paddingTop:5}),callout:[b.callout,{boxShadow:S.elevation8,borderRadius:Z,selectors:(m={},m[".ms-Callout-main"]={borderRadius:Z},m)},R],dropdownItemsWrapper:{selectors:{"&:focus":{outline:0}}},dropdownItems:[b.dropdownItems,{display:"block"}],dropdownItem:W(W([],B),[P()]),dropdownItemSelected:G,dropdownItemDisabled:q,dropdownItemSelectedAndDisabled:[G,q,{backgroundColor:"transparent"}],dropdownItemHidden:W(W([],B),[{display:"none"}]),dropdownDivider:[b.dropdownDivider,{height:1,backgroundColor:c.bodyDivider}],dropdownOptionText:[b.dropdownOptionText,{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",minWidth:0,maxWidth:"100%",wordWrap:"break-word",overflowWrap:"break-word",margin:"1px"}],dropdownItemHeader:[b.dropdownItemHeader,g(g({},D.medium),{fontWeight:$e.semibold,color:c.menuHeader,background:"none",backgroundColor:"transparent",border:"none",height:Y,lineHeight:Y,cursor:"default",padding:"0 8px",userSelect:"none",textAlign:"left",selectors:(_={},_[y]=g({color:"GrayText"},U()),_)})],subComponentStyles:{label:{root:{display:"inline-block"}},multiSelectItem:{root:{padding:0},label:{alignSelf:"stretch",padding:"0 8px",width:"100%"},input:{selectors:(l={},l["."+ee+" &:focus + label::before"]={outlineOffset:"0px"},l)}},panel:{root:[H],main:{selectors:(h={},h[uo]={width:272},h)},contentInner:{padding:"0 0 20px"}}}}},mo=me(_e,ho,void 0,{scope:"Dropdown"});mo.displayName="Dropdown";export{mo as Dropdown,_e as DropdownBase,L as DropdownMenuItemType};
//# sourceMappingURL=Dropdown.db9c684e.09388529.js.map
