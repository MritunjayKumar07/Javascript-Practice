const user = {
    userName:"Mritunjay Kumar",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.userName} get discount Rs ${this.price}`);//'this' is get the current context ant the current contect is parents scope.
        
    }
}

// user.welcomeMessage // return nothing return :-
user.welcomeMessage() //return :-Mritunjay Kumar get discount Rs 999
user.userName = "Amit" 
user.welcomeMessage() //return :-Amit get discount Rs 999

const user2 = {
    userName:"Mritunjay Kumar",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.userName} get discount Rs ${this.price}`);//'this' is get the current context ant the current contect is parents scope.
        console.log(this)
        
    }
}

// user.welcomeMessage // return nothing return :-
user2.welcomeMessage() //return :-Mritunjay Kumar get discount Rs 999 { userName: 'Mritunjay Kumar', price: 999, welcomeMessage: [Function: welcomeMessage]}
user2.userName = "Amit" 
user2.welcomeMessage() //return :-Amit get discount Rs 999 {  userName: 'Amit',  price: 999,  welcomeMessage: [Function: welcomeMessage]}

console.log(this) // return :- {} //Becoune we use node in console or windows print diffrent
//Browser ks ander Gloable object hy windows Object. 

const functionThis1 = ()=> {
    let userName = "Mritunjay"
    console.log(this.userName);
    console.log(this);
}

functionThis1() //'this' Work Only Object not in Function return:- undefined {}


function functionThis() {
    console.log(this)
}

functionThis()//return use method and function for function
/*Return :- <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Getter/Setter],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter]
  }*/



/*when i use this line 'console.log(this)' in windows/console: 
return :-  THis all Are Windows event's
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
alert:ƒ alert()
atob:ƒ atob()
blur:ƒ blur()
btoa:ƒ btoa()
caches: CacheStorage {}
cancelAnimationFrame:ƒ cancelAnimationFrame()
cancelIdleCallback:ƒ cancelIdleCallback()
captureEvents:ƒ captureEvents()
chrome:{loadTimes: ƒ, csi: ƒ}
clearInterval:ƒ clearInterval()
clearTimeout:ƒ clearTimeout()
clientInformation:Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 1, scheduling: Scheduling, …}
close:ƒ close()
closed:false
confirm:ƒ confirm()
cookieStore:CookieStore {onchange: null}
createImageBitmap:ƒ createImageBitmap()
credentialless:false
crossOriginIsolated:false
crypto:Crypto {subtle: SubtleCrypto}
customElements:CustomElementRegistry {}
devicePixelRatio:1.25
document:document
documentPictureInPicture:DocumentPictureInPicture {window: null, onenter: null}
external:External {}
fence:null
fetch:ƒ fetch()
find:ƒ find()
focus:ƒ focus()
frameElement:null
frames:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
getComputedStyle:ƒ getComputedStyle()
getScreenDetails:ƒ getScreenDetails()
getSelection:ƒ getSelection()
history:History {length: 1, scrollRestoration: 'auto', state: null}
indexedDB:IDBFactory {}
innerHeight:859
innerWidth:980
isSecureContext:true
launchQueue:LaunchQueue {}
length:0
localStorage:Storage {length: 0}
location:Location {ancestorOrigins: DOMStringList, href: 'chrome-untrusted://new-tab-page/one-google-bar?paramsencoded=', origin: 'chrome-untrusted://new-tab-page', protocol: 'chrome-untrusted:', host: 'new-tab-page', …}
locationbar:BarProp {visible: true}
matchMedia:ƒ matchMedia()
menubar:BarProp {visible: true}
moveBy:ƒ moveBy()
moveTo:ƒ moveTo()
name:""
navigation:Navigation {currentEntry: NavigationHistoryEntry, transition: null, canGoBack: false, canGoForward: false, onnavigate: null, …}
navigator:Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 1, scheduling: Scheduling, …}
onabort:null
onafterprint:null
onanimationend:null
onanimationiteration:null
onanimationstart:null
onappinstalled:null
onauxclick:null
onbeforeinput:null
onbeforeinstallprompt:null
onbeforematch:null
onbeforeprint:null
onbeforetoggle:null
onbeforeunload:null
onbeforexrselect:null
onblur:null
oncancel:null
oncanplay:null
oncanplaythrough:null
onchange:null
onclick:null
onclose:null
oncontentvisibilityautostatechange:null
oncontextlost:null
oncontextmenu:null
oncontextrestored:null
oncuechange:null
ondblclick:null
ondevicemotion:null
ondeviceorientation:null
ondeviceorientationabsolute:null
ondrag:null
ondragend:null
ondragenter:null
ondragleave:null
ondragover:null
ondragstart:null
ondrop:null
ondurationchange:null
onemptied:null
onended:null
onerror:null
onfocus:null
onformdata:null
ongotpointercapture:null
onhashchange:null
oninput:null
oninvalid:null
onkeydown:null
onkeypress:null
onkeyup:null
onlanguagechange:null
onload:null
onloadeddata:null
onloadedmetadata:null
onloadstart:null
onlostpointercapture:null
onmessage:null
onmessageerror:null
onmousedown:null
onmouseenter:null
onmouseleave:null
onmousemove:null
onmouseout:null
onmouseover:null
onmouseup:null
onmousewheel:null
onoffline:null
ononline:null
onpagehide:null
onpageshow:null
onpause:null
onplay:null
onplaying:null
onpointercancel:null
onpointerdown:null
onpointerenter:null
onpointerleave:null
onpointermove:null
onpointerout:null
onpointerover:null
onpointerrawupdate:null
onpointerup:null
onpopstate:null
onprogress:null
onratechange:null
onrejectionhandled:null
onreset:null
onresize:null
onscroll:null
onscrollend:null
onsearch:null
onsecuritypolicyviolation:null
onseeked:null
onseeking:null
onselect:null
onselectionchange:null
onselectstart:null
onslotchange:null
onstalled:null
onstorage:null
onsubmit:null
onsuspend:null
ontimeupdate:null
ontoggle:null
ontransitioncancel:null
ontransitionend:null
ontransitionrun:null
ontransitionstart:null
onunhandledrejection:null
onunload:null
onvolumechange:null
onwaiting:null
onwebkitanimationend:null
onwebkitanimationiteration:null
onwebkitanimationstart:null
onwebkittransitionend:null
onwheel:null
open:ƒ open()
opener:null
origin:"chrome-untrusted://new-tab-page"
originAgentCluster:false
outerHeight:816
outerWidth:1536
pageXOffset:0
pageYOffset:0
parent:global {0: global, window: global, self: global, location: {…}, closed: false, frames: global, …}
performance:Performance {timeOrigin: 1702524470434.4, onresourcetimingbufferfull: null, timing: PerformanceTiming, navigation: PerformanceNavigation, memory: MemoryInfo, …}
personalbar:BarProp {visible: true}
postMessage:ƒ postMessage()
print:ƒ print()
prompt:ƒ prompt()
queryLocalFonts:ƒ queryLocalFonts()
queueMicrotask:ƒ queueMicrotask()
releaseEvents:ƒ releaseEvents()
reportError:ƒ reportError()
requestAnimationFrame:ƒ requestAnimationFrame()
requestIdleCallback:ƒ requestIdleCallback()
resizeBy:ƒ resizeBy()
resizeTo:ƒ resizeTo()
scheduler:Scheduler {}
screen:Screen {availWidth: 1536, availHeight: 816, width: 1536, height: 864, colorDepth: 24, …}
screenLeft:0
screenTop:0
screenX:0
screenY:0
scroll:ƒ scroll()
scrollBy:ƒ scrollBy()
scrollTo:ƒ scrollTo()
scrollX:0
scrollY:0
scrollbars:BarProp {visible: true}
self:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
sessionStorage:Storage {length: 0}
setInterval:ƒ setInterval()
setTimeout:ƒ setTimeout()
sharedStorage:SharedStorage {worklet: SharedStorageWorklet}
showDirectoryPicker:ƒ showDirectoryPicker()
showOpenFilePicker:ƒ showOpenFilePicker()
showSaveFilePicker:ƒ showSaveFilePicker()
speechSynthesis:SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}
status:""
statusbar:BarProp {visible: true}
stop:ƒ stop()
structuredClone:ƒ structuredClone()
styleMedia:StyleMedia {type: 'screen'}
toolbar:BarProp {visible: true}
top:global {0: global, window: global, self: global, location: {…}, closed: false, frames: global, …}
trustedTypes:TrustedTypePolicyFactory {emptyHTML: emptyHTML "", emptyScript: emptyScript "", defaultPolicy: null}
visualViewport:VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 980, …}
webkitCancelAnimationFrame:ƒ webkitCancelAnimationFrame()
webkitRequestAnimationFrame:ƒ webkitRequestAnimationFrame()
webkitRequestFileSystem:ƒ webkitRequestFileSystem()
webkitResolveLocalFileSystemURL:ƒ webkitResolveLocalFileSystemURL()
window:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Infinity:Infinity
AbortController:ƒ AbortController()
AbortSignal:ƒ AbortSignal()
AbsoluteOrientationSensor:ƒ AbsoluteOrientationSensor()
AbstractRange:ƒ AbstractRange()
Accelerometer:ƒ Accelerometer()
AggregateError:ƒ AggregateError()
AnalyserNode:ƒ AnalyserNode()
Animation:ƒ Animation()
AnimationEffect:ƒ AnimationEffect()
AnimationEvent:ƒ AnimationEvent()
AnimationPlaybackEvent:ƒ AnimationPlaybackEvent()
AnimationTimeline:ƒ AnimationTimeline()
Array:ƒ Array()
ArrayBuffer:ƒ ArrayBuffer()
Atomics:Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}
Attr:ƒ Attr()
Audio:ƒ Audio()
AudioBuffer:ƒ AudioBuffer()
AudioBufferSourceNode:ƒ AudioBufferSourceNode()
AudioContext:ƒ AudioContext()
AudioData:ƒ AudioData()
AudioDecoder:ƒ AudioDecoder()
AudioDestinationNode:ƒ AudioDestinationNode()
AudioEncoder:ƒ AudioEncoder()
AudioListener:ƒ AudioListener()
AudioNode:ƒ AudioNode()
AudioParam:ƒ AudioParam()
AudioParamMap:ƒ AudioParamMap()
AudioProcessingEvent:ƒ AudioProcessingEvent()
AudioScheduledSourceNode:ƒ AudioScheduledSourceNode()
AudioSinkInfo:ƒ AudioSinkInfo()
AudioWorklet:ƒ AudioWorklet()
AudioWorkletNode:ƒ AudioWorkletNode()
AuthenticatorAssertionResponse:ƒ AuthenticatorAssertionResponse()
AuthenticatorAttestationResponse:ƒ AuthenticatorAttestationResponse()
AuthenticatorResponse:ƒ AuthenticatorResponse()
BackgroundFetchManager:ƒ BackgroundFetchManager()
BackgroundFetchRecord:ƒ BackgroundFetchRecord()
BackgroundFetchRegistration:ƒ BackgroundFetchRegistration()
BarProp:ƒ BarProp()
BaseAudioContext:ƒ BaseAudioContext()
BatteryManager:ƒ BatteryManager()
BeforeInstallPromptEvent:ƒ BeforeInstallPromptEvent()
BeforeUnloadEvent:ƒ BeforeUnloadEvent()
BigInt:ƒ BigInt()
BigInt64Array:ƒ BigInt64Array()
BigUint64Array:ƒ BigUint64Array()
BiquadFilterNode:ƒ BiquadFilterNode()
Blob:ƒ Blob()
BlobEvent:ƒ BlobEvent()
Bluetooth:ƒ Bluetooth()
BluetoothCharacteristicProperties:ƒ BluetoothCharacteristicProperties()
BluetoothDevice:ƒ BluetoothDevice()
BluetoothRemoteGATTCharacteristic:ƒ BluetoothRemoteGATTCharacteristic()
BluetoothRemoteGATTDescriptor:ƒ BluetoothRemoteGATTDescriptor()
BluetoothRemoteGATTServer:ƒ BluetoothRemoteGATTServer()
BluetoothRemoteGATTService:ƒ BluetoothRemoteGATTService()
BluetoothUUID:ƒ BluetoothUUID()
Boolean:ƒ Boolean()
BroadcastChannel:ƒ BroadcastChannel()
BrowserCaptureMediaStreamTrack:ƒ BrowserCaptureMediaStreamTrack()
ByteLengthQueuingStrategy:ƒ ByteLengthQueuingStrategy()
CDATASection:ƒ CDATASection()
CSS:CSS {Hz: ƒ, Q: ƒ, ch: ƒ, cm: ƒ, cqb: ƒ, …}
CSSAnimation:ƒ CSSAnimation()
CSSConditionRule:ƒ CSSConditionRule()
CSSContainerRule:ƒ CSSContainerRule()
CSSCounterStyleRule:ƒ CSSCounterStyleRule()
CSSFontFaceRule:ƒ CSSFontFaceRule()
CSSFontPaletteValuesRule:ƒ CSSFontPaletteValuesRule()
CSSGroupingRule:ƒ CSSGroupingRule()
CSSImageValue:ƒ CSSImageValue()
CSSImportRule:ƒ CSSImportRule()
CSSKeyframeRule:ƒ CSSKeyframeRule()
CSSKeyframesRule:ƒ CSSKeyframesRule()
CSSKeywordValue:ƒ CSSKeywordValue()
CSSLayerBlockRule:ƒ CSSLayerBlockRule()
CSSLayerStatementRule:ƒ CSSLayerStatementRule()
CSSMathClamp:ƒ CSSMathClamp()
CSSMathInvert:ƒ CSSMathInvert()
CSSMathMax:ƒ CSSMathMax()
CSSMathMin:ƒ CSSMathMin()
CSSMathNegate:ƒ CSSMathNegate()
CSSMathProduct:ƒ CSSMathProduct()
CSSMathSum:ƒ CSSMathSum()
CSSMathValue:ƒ CSSMathValue()
CSSMatrixComponent:ƒ CSSMatrixComponent()
CSSMediaRule:ƒ CSSMediaRule()
CSSNamespaceRule:ƒ CSSNamespaceRule()
CSSNumericArray:ƒ CSSNumericArray()
CSSNumericValue:ƒ CSSNumericValue()
CSSPageRule:ƒ CSSPageRule()
CSSPerspective:ƒ CSSPerspective()
CSSPositionValue:ƒ CSSPositionValue()
CSSPropertyRule:ƒ CSSPropertyRule()
CSSRotate:ƒ CSSRotate()
CSSRule:ƒ CSSRule()
CSSRuleList:ƒ CSSRuleList()
CSSScale:ƒ CSSScale()
CSSScopeRule:ƒ CSSScopeRule()
CSSSkew:ƒ CSSSkew()
CSSSkewX:ƒ CSSSkewX()
CSSSkewY:ƒ CSSSkewY()
CSSStartingStyleRule:ƒ CSSStartingStyleRule()
CSSStyleDeclaration:ƒ CSSStyleDeclaration()
CSSStyleRule:ƒ CSSStyleRule()
CSSStyleSheet:ƒ CSSStyleSheet()
CSSStyleValue:ƒ CSSStyleValue()
CSSSupportsRule:ƒ CSSSupportsRule()
CSSTransformComponent:ƒ CSSTransformComponent()
CSSTransformValue:ƒ CSSTransformValue()
CSSTransition:ƒ CSSTransition()
CSSTranslate:ƒ CSSTranslate()
CSSUnitValue:ƒ CSSUnitValue()
CSSUnparsedValue:ƒ CSSUnparsedValue()
CSSVariableReferenceValue:ƒ CSSVariableReferenceValue()
Cache:ƒ Cache()
CacheStorage:ƒ CacheStorage()
CanvasCaptureMediaStreamTrack:ƒ CanvasCaptureMediaStreamTrack()
CanvasGradient:ƒ CanvasGradient()
CanvasPattern:ƒ CanvasPattern()
CanvasRenderingContext2D:ƒ CanvasRenderingContext2D()
CaptureController:ƒ CaptureController()
ChannelMergerNode:ƒ ChannelMergerNode()
ChannelSplitterNode:ƒ ChannelSplitterNode()
CharacterData:ƒ CharacterData()
Clipboard:ƒ Clipboard()
ClipboardEvent:ƒ ClipboardEvent()
ClipboardItem:ƒ ClipboardItem()
CloseEvent:ƒ CloseEvent()
CloseWatcher:ƒ CloseWatcher()
Comment:ƒ Comment()
CompositionEvent:ƒ CompositionEvent()
CompressionStream:ƒ CompressionStream()
ConstantSourceNode:ƒ ConstantSourceNode()
ContentVisibilityAutoStateChangeEvent:ƒ ContentVisibilityAutoStateChangeEvent()
ConvolverNode:ƒ ConvolverNode()
CookieChangeEvent:ƒ CookieChangeEvent()
CookieDeprecationLabel:ƒ CookieDeprecationLabel()
CookieStore:ƒ CookieStore()
CookieStoreManager:ƒ CookieStoreManager()
CountQueuingStrategy:ƒ CountQueuingStrategy()
Credential:ƒ Credential()
CredentialsContainer:ƒ CredentialsContainer()
CropTarget:ƒ CropTarget()
Crypto:ƒ Crypto()
CryptoKey:ƒ CryptoKey()
CustomElementRegistry:ƒ CustomElementRegistry()
CustomEvent:ƒ CustomEvent()
CustomStateSet:ƒ CustomStateSet()
DOMError:ƒ DOMError()
DOMException:ƒ DOMException()
DOMImplementation:ƒ DOMImplementation()
DOMMatrix:ƒ DOMMatrix()
DOMMatrixReadOnly:ƒ DOMMatrixReadOnly()
DOMParser:ƒ DOMParser()
DOMPoint:ƒ DOMPoint()
DOMPointReadOnly:ƒ DOMPointReadOnly()
DOMQuad:ƒ DOMQuad()
DOMRect:ƒ DOMRect()
DOMRectList:ƒ DOMRectList()
DOMRectReadOnly:ƒ DOMRectReadOnly()
DOMStringList:ƒ DOMStringList()
DOMStringMap:ƒ DOMStringMap()
DOMTokenList:ƒ DOMTokenList()
DataTransfer:ƒ DataTransfer()
DataTransferItem:ƒ DataTransferItem()
DataTransferItemList:ƒ DataTransferItemList()
DataView:ƒ DataView()
Date:ƒ Date()
DecompressionStream:ƒ DecompressionStream()
DelayNode:ƒ DelayNode()
DelegatedInkTrailPresenter:ƒ DelegatedInkTrailPresenter()
DeviceMotionEvent:ƒ DeviceMotionEvent()
DeviceMotionEventAcceleration:ƒ DeviceMotionEventAcceleration()
DeviceMotionEventRotationRate:ƒ DeviceMotionEventRotationRate()
DeviceOrientationEvent:ƒ DeviceOrientationEvent()
Document:ƒ Document()
DocumentFragment:ƒ DocumentFragment()
DocumentPictureInPicture:ƒ DocumentPictureInPicture()
DocumentPictureInPictureEvent:ƒ DocumentPictureInPictureEvent()
DocumentTimeline:ƒ DocumentTimeline()
DocumentType:ƒ DocumentType()
DragEvent:ƒ DragEvent()
DynamicsCompressorNode:ƒ DynamicsCompressorNode()
Element:ƒ Element()
ElementInternals:ƒ ElementInternals()
EncodedAudioChunk:ƒ EncodedAudioChunk()
EncodedVideoChunk:ƒ EncodedVideoChunk()
Error:ƒ Error()
ErrorEvent:ƒ ErrorEvent()
EvalError:ƒ EvalError()
Event:ƒ Event()
EventCounts:ƒ EventCounts()
EventSource:ƒ EventSource()
EventTarget:ƒ EventTarget()
External:ƒ External()
EyeDropper:ƒ EyeDropper()
FeaturePolicy:ƒ FeaturePolicy()
FederatedCredential:ƒ FederatedCredential()
Fence:ƒ Fence()
FencedFrameConfig:ƒ FencedFrameConfig()
File:ƒ File()
FileList:ƒ FileList()
FileReader:ƒ FileReader()
FileSystemDirectoryHandle:ƒ FileSystemDirectoryHandle()
FileSystemFileHandle:ƒ FileSystemFileHandle()
FileSystemHandle:ƒ FileSystemHandle()
FileSystemWritableFileStream:ƒ FileSystemWritableFileStream()
FinalizationRegistry:ƒ FinalizationRegistry()
Float32Array:ƒ Float32Array()
Float64Array:ƒ Float64Array()
FocusEvent:ƒ FocusEvent()
FontData:ƒ FontData()
FontFace:ƒ FontFace()
FontFaceSetLoadEvent:ƒ FontFaceSetLoadEvent()
FormData:ƒ FormData()
FormDataEvent:ƒ FormDataEvent()
FragmentDirective:ƒ FragmentDirective()
Function:ƒ Function()
GPU:ƒ GPU()
GPUAdapter:ƒ GPUAdapter()
GPUAdapterInfo:ƒ GPUAdapterInfo()
GPUBindGroup:ƒ GPUBindGroup()
GPUBindGroupLayout:ƒ GPUBindGroupLayout()
GPUBuffer:ƒ GPUBuffer()
GPUBufferUsage:GPUBufferUsage {MAP_READ: 1, MAP_WRITE: 2, COPY_SRC: 4, COPY_DST: 8, INDEX: 16, …}
GPUCanvasContext:ƒ GPUCanvasContext()
GPUColorWrite:GPUColorWrite {RED: 1, GREEN: 2, BLUE: 4, ALPHA: 8, ALL: 15, …}
GPUCommandBuffer:ƒ GPUCommandBuffer()
GPUCommandEncoder:ƒ GPUCommandEncoder()
GPUCompilationInfo:ƒ GPUCompilationInfo()
GPUCompilationMessage:ƒ GPUCompilationMessage()
GPUComputePassEncoder:ƒ GPUComputePassEncoder()
GPUComputePipeline:ƒ GPUComputePipeline()
GPUDevice:ƒ GPUDevice()
GPUDeviceLostInfo:ƒ GPUDeviceLostInfo()
GPUError:ƒ GPUError()
GPUExternalTexture:ƒ GPUExternalTexture()
GPUInternalError:ƒ GPUInternalError()
GPUMapMode:GPUMapMode {READ: 1, WRITE: 2, Symbol(Symbol.toStringTag): 'GPUMapMode'}
GPUOutOfMemoryError:ƒ GPUOutOfMemoryError()
GPUPipelineError:ƒ GPUPipelineError()
GPUPipelineLayout:ƒ GPUPipelineLayout()
GPUQuerySet:ƒ GPUQuerySet()
GPUQueue:ƒ GPUQueue()
GPURenderBundle:ƒ GPURenderBundle()
GPURenderBundleEncoder:ƒ GPURenderBundleEncoder()
GPURenderPassEncoder:ƒ GPURenderPassEncoder()
GPURenderPipeline:ƒ GPURenderPipeline()
GPUSampler:ƒ GPUSampler()
GPUShaderModule:ƒ GPUShaderModule()
GPUShaderStage:GPUShaderStage {VERTEX: 1, FRAGMENT: 2, COMPUTE: 4, Symbol(Symbol.toStringTag): 'GPUShaderStage'}
GPUSupportedFeatures:ƒ GPUSupportedFeatures()
GPUSupportedLimits:ƒ GPUSupportedLimits()
GPUTexture:ƒ GPUTexture()
GPUTextureUsage:GPUTextureUsage {COPY_SRC: 1, COPY_DST: 2, TEXTURE_BINDING: 4, STORAGE_BINDING: 8, RENDER_ATTACHMENT: 16, …}
GPUTextureView:ƒ GPUTextureView()
GPUUncapturedErrorEvent:ƒ GPUUncapturedErrorEvent()
GPUValidationError:ƒ GPUValidationError()
GainNode:ƒ GainNode()
Gamepad:ƒ Gamepad()
GamepadButton:ƒ GamepadButton()
GamepadEvent:ƒ GamepadEvent()
GamepadHapticActuator:ƒ GamepadHapticActuator()
Geolocation:ƒ Geolocation()
GeolocationCoordinates:ƒ GeolocationCoordinates()
GeolocationPosition:ƒ GeolocationPosition()
GeolocationPositionError:ƒ GeolocationPositionError()
GravitySensor:ƒ GravitySensor()
Gyroscope:ƒ Gyroscope()
HID:ƒ HID()
HIDConnectionEvent:ƒ HIDConnectionEvent()
HIDDevice:ƒ HIDDevice()
HIDInputReportEvent:ƒ HIDInputReportEvent()
HTMLAllCollection:ƒ HTMLAllCollection()
HTMLAnchorElement:ƒ HTMLAnchorElement()
HTMLAreaElement:ƒ HTMLAreaElement()
HTMLAudioElement:ƒ HTMLAudioElement()
HTMLBRElement:ƒ HTMLBRElement()
HTMLBaseElement:ƒ HTMLBaseElement()
HTMLBodyElement:ƒ HTMLBodyElement()
HTMLButtonElement:ƒ HTMLButtonElement()
HTMLCanvasElement:ƒ HTMLCanvasElement()
HTMLCollection:ƒ HTMLCollection()
HTMLDListElement:ƒ HTMLDListElement()
HTMLDataElement:ƒ HTMLDataElement()
HTMLDataListElement:ƒ HTMLDataListElement()
HTMLDetailsElement:ƒ HTMLDetailsElement()
HTMLDialogElement:ƒ HTMLDialogElement()
HTMLDirectoryElement:ƒ HTMLDirectoryElement()
HTMLDivElement:ƒ HTMLDivElement()
HTMLDocument:ƒ HTMLDocument()
HTMLElement:ƒ HTMLElement()
HTMLEmbedElement:ƒ HTMLEmbedElement()
HTMLFencedFrameElement:ƒ HTMLFencedFrameElement()
HTMLFieldSetElement:ƒ HTMLFieldSetElement()
HTMLFontElement:ƒ HTMLFontElement()
HTMLFormControlsCollection:ƒ HTMLFormControlsCollection()
HTMLFormElement:ƒ HTMLFormElement()
HTMLFrameElement:ƒ HTMLFrameElement()
HTMLFrameSetElement:ƒ HTMLFrameSetElement()
HTMLHRElement:ƒ HTMLHRElement()
HTMLHeadElement:ƒ HTMLHeadElement()
HTMLHeadingElement:ƒ HTMLHeadingElement()
HTMLHtmlElement:ƒ HTMLHtmlElement()
HTMLIFrameElement:ƒ HTMLIFrameElement()
HTMLImageElement:ƒ HTMLImageElement()
HTMLInputElement:ƒ HTMLInputElement()
HTMLLIElement:ƒ HTMLLIElement()
HTMLLabelElement:ƒ HTMLLabelElement()
HTMLLegendElement:ƒ HTMLLegendElement()
HTMLLinkElement:ƒ HTMLLinkElement()
HTMLMapElement:ƒ HTMLMapElement()
HTMLMarqueeElement:ƒ HTMLMarqueeElement()
HTMLMediaElement:ƒ HTMLMediaElement()
HTMLMenuElement:ƒ HTMLMenuElement()
HTMLMetaElement:ƒ HTMLMetaElement()
HTMLMeterElement:ƒ HTMLMeterElement()
HTMLModElement:ƒ HTMLModElement()
HTMLOListElement:ƒ HTMLOListElement()
HTMLObjectElement:ƒ HTMLObjectElement()
HTMLOptGroupElement:ƒ HTMLOptGroupElement()
HTMLOptionElement:ƒ HTMLOptionElement()
HTMLOptionsCollection:ƒ HTMLOptionsCollection()
HTMLOutputElement:ƒ HTMLOutputElement()
HTMLParagraphElement:ƒ HTMLParagraphElement()
HTMLParamElement:ƒ HTMLParamElement()
HTMLPictureElement:ƒ HTMLPictureElement()
HTMLPreElement:ƒ HTMLPreElement()
HTMLProgressElement:ƒ HTMLProgressElement()
HTMLQuoteElement:ƒ HTMLQuoteElement()
HTMLScriptElement:ƒ HTMLScriptElement()
HTMLSelectElement:ƒ HTMLSelectElement()
HTMLSlotElement:ƒ HTMLSlotElement()
HTMLSourceElement:ƒ HTMLSourceElement()
HTMLSpanElement:ƒ HTMLSpanElement()
HTMLStyleElement:ƒ HTMLStyleElement()
HTMLTableCaptionElement:ƒ HTMLTableCaptionElement()
HTMLTableCellElement:ƒ HTMLTableCellElement()
HTMLTableColElement:ƒ HTMLTableColElement()
HTMLTableElement:ƒ HTMLTableElement()
HTMLTableRowElement:ƒ HTMLTableRowElement()
HTMLTableSectionElement:ƒ HTMLTableSectionElement()
HTMLTemplateElement:ƒ HTMLTemplateElement()
HTMLTextAreaElement:ƒ HTMLTextAreaElement()
HTMLTimeElement:ƒ HTMLTimeElement()
HTMLTitleElement:ƒ HTMLTitleElement()
HTMLTrackElement:ƒ HTMLTrackElement()
HTMLUListElement:ƒ HTMLUListElement()
HTMLUnknownElement:ƒ HTMLUnknownElement()
HTMLVideoElement:ƒ HTMLVideoElement()
HashChangeEvent:ƒ HashChangeEvent()
Headers:ƒ Headers()
Highlight:ƒ Highlight()
HighlightRegistry:ƒ HighlightRegistry()
History:ƒ History()
IDBCursor:ƒ IDBCursor()
IDBCursorWithValue:ƒ IDBCursorWithValue()
IDBDatabase:ƒ IDBDatabase()
IDBFactory:ƒ IDBFactory()
IDBIndex:ƒ IDBIndex()
IDBKeyRange:ƒ IDBKeyRange()
IDBObjectStore:ƒ IDBObjectStore()
IDBOpenDBRequest:ƒ IDBOpenDBRequest()
IDBRequest:ƒ IDBRequest()
IDBTransaction:ƒ IDBTransaction()
IDBVersionChangeEvent:ƒ IDBVersionChangeEvent()
IIRFilterNode:ƒ IIRFilterNode()
IdentityCredential:ƒ IdentityCredential()
IdentityCredentialError:ƒ IdentityCredentialError()
IdentityProvider:ƒ IdentityProvider()
IdleDeadline:ƒ IdleDeadline()
IdleDetector:ƒ IdleDetector()
Image:ƒ Image()
ImageBitmap:ƒ ImageBitmap()
ImageBitmapRenderingContext:ƒ ImageBitmapRenderingContext()
ImageCapture:ƒ ImageCapture()
ImageData:ƒ ImageData()
ImageDecoder:ƒ ImageDecoder()
ImageTrack:ƒ ImageTrack()
ImageTrackList:ƒ ImageTrackList()
Ink:ƒ Ink()
InputDeviceCapabilities:ƒ InputDeviceCapabilities()
InputDeviceInfo:ƒ InputDeviceInfo()
InputEvent:ƒ InputEvent()
Int8Array:ƒ Int8Array()
Int16Array:ƒ Int16Array()
Int32Array:ƒ Int32Array()
IntersectionObserver:ƒ IntersectionObserver()
IntersectionObserverEntry:ƒ IntersectionObserverEntry()
Intl:Intl {getCanonicalLocales: ƒ, supportedValuesOf: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, …}
JSON:JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ, rawJSON: ƒ, isRawJSON: ƒ}
Keyboard:ƒ Keyboard()
KeyboardEvent:ƒ KeyboardEvent()
KeyboardLayoutMap:ƒ KeyboardLayoutMap()
KeyframeEffect:ƒ KeyframeEffect()
LargestContentfulPaint:ƒ LargestContentfulPaint()
LaunchParams:ƒ LaunchParams()
LaunchQueue:ƒ LaunchQueue()
LayoutShift:ƒ LayoutShift()
LayoutShiftAttribution:ƒ LayoutShiftAttribution()
LinearAccelerationSensor:ƒ LinearAccelerationSensor()
Location:ƒ Location()
Lock:ƒ Lock()
LockManager:ƒ LockManager()
MIDIAccess:ƒ MIDIAccess()
MIDIConnectionEvent:ƒ MIDIConnectionEvent()
MIDIInput:ƒ MIDIInput()
MIDIInputMap:ƒ MIDIInputMap()
MIDIMessageEvent:ƒ MIDIMessageEvent()
MIDIOutput:ƒ MIDIOutput()
MIDIOutputMap:ƒ MIDIOutputMap()
MIDIPort:ƒ MIDIPort()
Map:ƒ Map()
Math:Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
MathMLElement:ƒ MathMLElement()
MediaCapabilities:ƒ MediaCapabilities()
MediaDeviceInfo:ƒ MediaDeviceInfo()
MediaDevices:ƒ MediaDevices()
MediaElementAudioSourceNode:ƒ MediaElementAudioSourceNode()
MediaEncryptedEvent:ƒ MediaEncryptedEvent()
MediaError:ƒ MediaError()
MediaKeyMessageEvent:ƒ MediaKeyMessageEvent()
MediaKeySession:ƒ MediaKeySession()
MediaKeyStatusMap:ƒ MediaKeyStatusMap()
MediaKeySystemAccess:ƒ MediaKeySystemAccess()
MediaKeys:ƒ MediaKeys()
MediaList:ƒ MediaList()
MediaMetadata:ƒ MediaMetadata()
MediaQueryList:ƒ MediaQueryList()
MediaQueryListEvent:ƒ MediaQueryListEvent()
MediaRecorder:ƒ MediaRecorder()
MediaSession:ƒ MediaSession()
MediaSource:ƒ MediaSource()
MediaSourceHandle:ƒ MediaSourceHandle()
MediaStream:ƒ MediaStream()
MediaStreamAudioDestinationNode:ƒ MediaStreamAudioDestinationNode()
MediaStreamAudioSourceNode:ƒ MediaStreamAudioSourceNode()
MediaStreamEvent:ƒ MediaStreamEvent()
MediaStreamTrack:ƒ MediaStreamTrack()
MediaStreamTrackEvent:ƒ MediaStreamTrackEvent()
MediaStreamTrackGenerator:ƒ MediaStreamTrackGenerator()
MediaStreamTrackProcessor:ƒ MediaStreamTrackProcessor()
MediaStreamTrackVideoStats:ƒ MediaStreamTrackVideoStats()
MessageChannel:ƒ MessageChannel()
MessageEvent:ƒ MessageEvent()
MessagePort:ƒ MessagePort()
MimeType:ƒ MimeType()
MimeTypeArray:ƒ MimeTypeArray()
MouseEvent:ƒ MouseEvent()
MutationEvent:ƒ MutationEvent()
MutationObserver:ƒ MutationObserver()
MutationRecord:ƒ MutationRecord()
NaN:NaN
NamedNodeMap:ƒ NamedNodeMap()
NavigateEvent:ƒ NavigateEvent()
Navigation:ƒ Navigation()
NavigationCurrentEntryChangeEvent:ƒ NavigationCurrentEntryChangeEvent()
NavigationDestination:ƒ NavigationDestination()
NavigationHistoryEntry:ƒ NavigationHistoryEntry()
NavigationPreloadManager:ƒ NavigationPreloadManager()
NavigationTransition:ƒ NavigationTransition()
Navigator:ƒ Navigator()
NavigatorLogin:ƒ NavigatorLogin()
NavigatorManagedData:ƒ NavigatorManagedData()
NavigatorUAData:ƒ NavigatorUAData()
NetworkInformation:ƒ NetworkInformation()
Node:ƒ Node()
NodeFilter:ƒ NodeFilter()
NodeIterator:ƒ NodeIterator()
NodeList:ƒ NodeList()
Notification:ƒ Notification()
Number:ƒ Number()
OTPCredential:ƒ OTPCredential()
Object:ƒ Object()
OfflineAudioCompletionEvent:ƒ OfflineAudioCompletionEvent()
OfflineAudioContext:ƒ OfflineAudioContext()
OffscreenCanvas:ƒ OffscreenCanvas()
OffscreenCanvasRenderingContext2D:ƒ OffscreenCanvasRenderingContext2D()
Option:ƒ Option()
OrientationSensor:ƒ OrientationSensor()
OscillatorNode:ƒ OscillatorNode()
OverconstrainedError:ƒ OverconstrainedError()
PageTransitionEvent:ƒ PageTransitionEvent()
PannerNode:ƒ PannerNode()
PasswordCredential:ƒ PasswordCredential()
Path2D:ƒ Path2D()
PaymentAddress:ƒ PaymentAddress()
PaymentManager:ƒ PaymentManager()
PaymentMethodChangeEvent:ƒ PaymentMethodChangeEvent()
PaymentRequest:ƒ PaymentRequest()
PaymentRequestUpdateEvent:ƒ PaymentRequestUpdateEvent()
PaymentResponse:ƒ PaymentResponse()
Performance:ƒ Performance()
PerformanceElementTiming:ƒ PerformanceElementTiming()
PerformanceEntry:ƒ PerformanceEntry()
PerformanceEventTiming:ƒ PerformanceEventTiming()
PerformanceLongTaskTiming:ƒ PerformanceLongTaskTiming()
PerformanceMark:ƒ PerformanceMark()
PerformanceMeasure:ƒ PerformanceMeasure()
PerformanceNavigation:ƒ PerformanceNavigation()
PerformanceNavigationTiming:ƒ PerformanceNavigationTiming()
PerformanceObserver:ƒ PerformanceObserver()
PerformanceObserverEntryList:ƒ PerformanceObserverEntryList()
PerformancePaintTiming:ƒ PerformancePaintTiming()
PerformanceResourceTiming:ƒ PerformanceResourceTiming()
PerformanceServerTiming:ƒ PerformanceServerTiming()
PerformanceTiming:ƒ PerformanceTiming()
PeriodicSyncManager:ƒ PeriodicSyncManager()
PeriodicWave:ƒ PeriodicWave()
PermissionStatus:ƒ PermissionStatus()
Permissions:ƒ Permissions()
PictureInPictureEvent:ƒ PictureInPictureEvent()
PictureInPictureWindow:ƒ PictureInPictureWindow()
Plugin:ƒ Plugin()
PluginArray:ƒ PluginArray()
PointerEvent:ƒ PointerEvent()
PopStateEvent:ƒ PopStateEvent()
Presentation:ƒ Presentation()
PresentationAvailability:ƒ PresentationAvailability()
PresentationConnection:ƒ PresentationConnection()
PresentationConnectionAvailableEvent:ƒ PresentationConnectionAvailableEvent()
PresentationConnectionCloseEvent:ƒ PresentationConnectionCloseEvent()
PresentationConnectionList:ƒ PresentationConnectionList()
PresentationReceiver:ƒ PresentationReceiver()
PresentationRequest:ƒ PresentationRequest()
ProcessingInstruction:ƒ ProcessingInstruction()
Profiler:ƒ Profiler()
ProgressEvent:ƒ ProgressEvent()
Promise:ƒ Promise()
PromiseRejectionEvent:ƒ PromiseRejectionEvent()
Proxy:ƒ Proxy()
PublicKeyCredential:ƒ PublicKeyCredential()
PushManager:ƒ PushManager()
PushSubscription:ƒ PushSubscription()
PushSubscriptionOptions:ƒ PushSubscriptionOptions()
RTCCertificate:ƒ RTCCertificate()
RTCDTMFSender:ƒ RTCDTMFSender()
RTCDTMFToneChangeEvent:ƒ RTCDTMFToneChangeEvent()
RTCDataChannel:ƒ RTCDataChannel()
RTCDataChannelEvent:ƒ RTCDataChannelEvent()
RTCDtlsTransport:ƒ RTCDtlsTransport()
RTCEncodedAudioFrame:ƒ RTCEncodedAudioFrame()
RTCEncodedVideoFrame:ƒ RTCEncodedVideoFrame()
RTCError:ƒ RTCError()
RTCErrorEvent:ƒ RTCErrorEvent()
RTCIceCandidate:ƒ RTCIceCandidate()
RTCIceTransport:ƒ RTCIceTransport()
RTCPeerConnection:ƒ RTCPeerConnection()
RTCPeerConnectionIceErrorEvent:ƒ RTCPeerConnectionIceErrorEvent()
RTCPeerConnectionIceEvent:ƒ RTCPeerConnectionIceEvent()
RTCRtpReceiver:ƒ RTCRtpReceiver()
RTCRtpSender:ƒ RTCRtpSender()
RTCRtpTransceiver:ƒ RTCRtpTransceiver()
RTCSctpTransport:ƒ RTCSctpTransport()
RTCSessionDescription:ƒ RTCSessionDescription()
RTCStatsReport:ƒ RTCStatsReport()
RTCTrackEvent:ƒ RTCTrackEvent()
RadioNodeList:ƒ RadioNodeList()
Range:ƒ Range()
RangeError:ƒ RangeError()
ReadableByteStreamController:ƒ ReadableByteStreamController()
ReadableStream:ƒ ReadableStream()
ReadableStreamBYOBReader:ƒ ReadableStreamBYOBReader()
ReadableStreamBYOBRequest:ƒ ReadableStreamBYOBRequest()
ReadableStreamDefaultController:ƒ ReadableStreamDefaultController()
ReadableStreamDefaultReader:ƒ ReadableStreamDefaultReader()
ReferenceError:ƒ ReferenceError()
Reflect:Reflect {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}
RegExp:ƒ RegExp()
RelativeOrientationSensor:ƒ RelativeOrientationSensor()
RemotePlayback:ƒ RemotePlayback()
ReportingObserver:ƒ ReportingObserver()
Request:ƒ Request()
ResizeObserver:ƒ ResizeObserver()
ResizeObserverEntry:ƒ ResizeObserverEntry()
ResizeObserverSize:ƒ ResizeObserverSize()
Response:ƒ Response()
SVGAElement:ƒ SVGAElement()
SVGAngle:ƒ SVGAngle()
SVGAnimateElement:ƒ SVGAnimateElement()
SVGAnimateMotionElement:ƒ SVGAnimateMotionElement()
SVGAnimateTransformElement:ƒ SVGAnimateTransformElement()
SVGAnimatedAngle:ƒ SVGAnimatedAngle()
SVGAnimatedBoolean:ƒ SVGAnimatedBoolean()
SVGAnimatedEnumeration:ƒ SVGAnimatedEnumeration()
SVGAnimatedInteger:ƒ SVGAnimatedInteger()
SVGAnimatedLength:ƒ SVGAnimatedLength()
SVGAnimatedLengthList:ƒ SVGAnimatedLengthList()
SVGAnimatedNumber:ƒ SVGAnimatedNumber()
SVGAnimatedNumberList:ƒ SVGAnimatedNumberList()
SVGAnimatedPreserveAspectRatio:ƒ SVGAnimatedPreserveAspectRatio()
SVGAnimatedRect:ƒ SVGAnimatedRect()
SVGAnimatedString:ƒ SVGAnimatedString()
SVGAnimatedTransformList:ƒ SVGAnimatedTransformList()
SVGAnimationElement:ƒ SVGAnimationElement()
SVGCircleElement:ƒ SVGCircleElement()
SVGClipPathElement:ƒ SVGClipPathElement()
SVGComponentTransferFunctionElement:ƒ SVGComponentTransferFunctionElement()
SVGDefsElement:ƒ SVGDefsElement()
SVGDescElement:ƒ SVGDescElement()
SVGElement:ƒ SVGElement()
SVGEllipseElement:ƒ SVGEllipseElement()
SVGFEBlendElement:ƒ SVGFEBlendElement()
SVGFEColorMatrixElement:ƒ SVGFEColorMatrixElement()
SVGFEComponentTransferElement:ƒ SVGFEComponentTransferElement()
SVGFECompositeElement:ƒ SVGFECompositeElement()
SVGFEConvolveMatrixElement:ƒ SVGFEConvolveMatrixElement()
SVGFEDiffuseLightingElement:ƒ SVGFEDiffuseLightingElement()
SVGFEDisplacementMapElement:ƒ SVGFEDisplacementMapElement()
SVGFEDistantLightElement:ƒ SVGFEDistantLightElement()
SVGFEDropShadowElement:ƒ SVGFEDropShadowElement()
SVGFEFloodElement:ƒ SVGFEFloodElement()
SVGFEFuncAElement:ƒ SVGFEFuncAElement()
SVGFEFuncBElement:ƒ SVGFEFuncBElement()
SVGFEFuncGElement:ƒ SVGFEFuncGElement()
SVGFEFuncRElement:ƒ SVGFEFuncRElement()
SVGFEGaussianBlurElement:ƒ SVGFEGaussianBlurElement()
SVGFEImageElement:ƒ SVGFEImageElement()
SVGFEMergeElement:ƒ SVGFEMergeElement()
SVGFEMergeNodeElement:ƒ SVGFEMergeNodeElement()
SVGFEMorphologyElement:ƒ SVGFEMorphologyElement()
SVGFEOffsetElement:ƒ SVGFEOffsetElement()
SVGFEPointLightElement:ƒ SVGFEPointLightElement()
SVGFESpecularLightingElement:ƒ SVGFESpecularLightingElement()
SVGFESpotLightElement:ƒ SVGFESpotLightElement()
SVGFETileElement:ƒ SVGFETileElement()
SVGFETurbulenceElement:ƒ SVGFETurbulenceElement()
SVGFilterElement:ƒ SVGFilterElement()
SVGForeignObjectElement:ƒ SVGForeignObjectElement()
SVGGElement:ƒ SVGGElement()
SVGGeometryElement:ƒ SVGGeometryElement()
SVGGradientElement:ƒ SVGGradientElement()
SVGGraphicsElement:ƒ SVGGraphicsElement()
SVGImageElement:ƒ SVGImageElement()
SVGLength:ƒ SVGLength()
SVGLengthList:ƒ SVGLengthList()
SVGLineElement:ƒ SVGLineElement()
SVGLinearGradientElement:ƒ SVGLinearGradientElement()
SVGMPathElement:ƒ SVGMPathElement()
SVGMarkerElement:ƒ SVGMarkerElement()
SVGMaskElement:ƒ SVGMaskElement()
SVGMatrix:ƒ SVGMatrix()
SVGMetadataElement:ƒ SVGMetadataElement()
SVGNumber:ƒ SVGNumber()
SVGNumberList:ƒ SVGNumberList()
SVGPathElement:ƒ SVGPathElement()
SVGPatternElement:ƒ SVGPatternElement()
SVGPoint:ƒ SVGPoint()
SVGPointList:ƒ SVGPointList()
SVGPolygonElement:ƒ SVGPolygonElement()
SVGPolylineElement:ƒ SVGPolylineElement()
SVGPreserveAspectRatio:ƒ SVGPreserveAspectRatio()
SVGRadialGradientElement:ƒ SVGRadialGradientElement()
SVGRect:ƒ SVGRect()
SVGRectElement:ƒ SVGRectElement()
SVGSVGElement:ƒ SVGSVGElement()
SVGScriptElement:ƒ SVGScriptElement()
SVGSetElement:ƒ SVGSetElement()
SVGStopElement:ƒ SVGStopElement()
SVGStringList:ƒ SVGStringList()
SVGStyleElement:ƒ SVGStyleElement()
SVGSwitchElement:ƒ SVGSwitchElement()
SVGSymbolElement:ƒ SVGSymbolElement()
SVGTSpanElement:ƒ SVGTSpanElement()
SVGTextContentElement:ƒ SVGTextContentElement()
SVGTextElement:ƒ SVGTextElement()
SVGTextPathElement:ƒ SVGTextPathElement()
SVGTextPositioningElement:ƒ SVGTextPositioningElement()
SVGTitleElement:ƒ SVGTitleElement()
SVGTransform:ƒ SVGTransform()
SVGTransformList:ƒ SVGTransformList()
SVGUnitTypes:ƒ SVGUnitTypes()
SVGUseElement:ƒ SVGUseElement()
SVGViewElement:ƒ SVGViewElement()
Scheduler:ƒ Scheduler()
Scheduling:ƒ Scheduling()
Screen:ƒ Screen()
ScreenDetailed:ƒ ScreenDetailed()
ScreenDetails:ƒ ScreenDetails()
ScreenOrientation:ƒ ScreenOrientation()
ScriptProcessorNode:ƒ ScriptProcessorNode()
ScrollTimeline:ƒ ScrollTimeline()
SecurityPolicyViolationEvent:ƒ SecurityPolicyViolationEvent()
Selection:ƒ Selection()
Sensor:ƒ Sensor()
SensorErrorEvent:ƒ SensorErrorEvent()
Serial:ƒ Serial()
SerialPort:ƒ SerialPort()
ServiceWorker:ƒ ServiceWorker()
ServiceWorkerContainer:ƒ ServiceWorkerContainer()
ServiceWorkerRegistration:ƒ ServiceWorkerRegistration()
Set:ƒ Set()
ShadowRoot:ƒ ShadowRoot()
SharedStorage:ƒ SharedStorage()
SharedStorageWorklet:ƒ SharedStorageWorklet()
SharedWorker:ƒ SharedWorker()
SourceBuffer:ƒ SourceBuffer()
SourceBufferList:ƒ SourceBufferList()
SpeechSynthesisErrorEvent:ƒ SpeechSynthesisErrorEvent()
SpeechSynthesisEvent:ƒ SpeechSynthesisEvent()
SpeechSynthesisUtterance:ƒ SpeechSynthesisUtterance()
StaticRange:ƒ StaticRange()
StereoPannerNode:ƒ StereoPannerNode()
Storage:ƒ Storage()
StorageEvent:ƒ StorageEvent()
StorageManager:ƒ StorageManager()
String:ƒ String()
StylePropertyMap:ƒ StylePropertyMap()
StylePropertyMapReadOnly:ƒ StylePropertyMapReadOnly()
StyleSheet:ƒ StyleSheet()
StyleSheetList:ƒ StyleSheetList()
SubmitEvent:ƒ SubmitEvent()
SubtleCrypto:ƒ SubtleCrypto()
Symbol:ƒ Symbol()
SyncManager:ƒ SyncManager()
SyntaxError:ƒ SyntaxError()
TaskAttributionTiming:ƒ TaskAttributionTiming()
TaskController:ƒ TaskController()
TaskPriorityChangeEvent:ƒ TaskPriorityChangeEvent()
TaskSignal:ƒ TaskSignal()
Text:ƒ Text()
TextDecoder:ƒ TextDecoder()
TextDecoderStream:ƒ TextDecoderStream()
TextEncoder:ƒ TextEncoder()
TextEncoderStream:ƒ TextEncoderStream()
TextEvent:ƒ TextEvent()
TextMetrics:ƒ TextMetrics()
TextTrack:ƒ TextTrack()
TextTrackCue:ƒ TextTrackCue()
TextTrackCueList:ƒ TextTrackCueList()
TextTrackList:ƒ TextTrackList()
TimeRanges:ƒ TimeRanges()
ToggleEvent:ƒ ToggleEvent()
Touch:ƒ Touch()
TouchEvent:ƒ TouchEvent()
TouchList:ƒ TouchList()
TrackEvent:ƒ TrackEvent()
TransformStream:ƒ TransformStream()
TransformStreamDefaultController:ƒ TransformStreamDefaultController()
TransitionEvent:ƒ TransitionEvent()
TreeWalker:ƒ TreeWalker()
TrustedHTML:ƒ TrustedHTML()
TrustedScript:ƒ TrustedScript()
TrustedScriptURL:ƒ TrustedScriptURL()
TrustedTypePolicy:ƒ TrustedTypePolicy()
TrustedTypePolicyFactory:ƒ TrustedTypePolicyFactory()
TypeError:ƒ TypeError()
UIEvent:ƒ UIEvent()
URIError:ƒ URIError()
URL:ƒ URL()
URLPattern:ƒ URLPattern()
URLSearchParams:ƒ URLSearchParams()
USB:ƒ USB()
USBAlternateInterface:ƒ USBAlternateInterface()
USBConfiguration:ƒ USBConfiguration()
USBConnectionEvent:ƒ USBConnectionEvent()
USBDevice:ƒ USBDevice()
USBEndpoint:ƒ USBEndpoint()
USBInTransferResult:ƒ USBInTransferResult()
USBInterface:ƒ USBInterface()
USBIsochronousInTransferPacket:ƒ USBIsochronousInTransferPacket()
USBIsochronousInTransferResult:ƒ USBIsochronousInTransferResult()
USBIsochronousOutTransferPacket:ƒ USBIsochronousOutTransferPacket()
USBIsochronousOutTransferResult:ƒ USBIsochronousOutTransferResult()
USBOutTransferResult:ƒ USBOutTransferResult()
Uint8Array:ƒ Uint8Array()
Uint8ClampedArray:ƒ Uint8ClampedArray()
Uint16Array:ƒ Uint16Array()
Uint32Array:ƒ Uint32Array()
UserActivation:ƒ UserActivation()
VTTCue:ƒ VTTCue()
ValidityState:ƒ ValidityState()
VideoColorSpace:ƒ VideoColorSpace()
VideoDecoder:ƒ VideoDecoder()
VideoEncoder:ƒ VideoEncoder()
VideoFrame:ƒ VideoFrame()
VideoPlaybackQuality:ƒ VideoPlaybackQuality()
ViewTimeline:ƒ ViewTimeline()
ViewTransition:ƒ ViewTransition()
VirtualKeyboard:ƒ VirtualKeyboard()
VirtualKeyboardGeometryChangeEvent:ƒ VirtualKeyboardGeometryChangeEvent()
VisibilityStateEntry:ƒ VisibilityStateEntry()
VisualViewport:ƒ VisualViewport()
WGSLLanguageFeatures:ƒ WGSLLanguageFeatures()
WakeLock:ƒ WakeLock()
WakeLockSentinel:ƒ WakeLockSentinel()
WaveShaperNode:ƒ WaveShaperNode()
WeakMap:ƒ WeakMap()
WeakRef:ƒ WeakRef()
WeakSet:ƒ WeakSet()
WebAssembly:WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}
WebGL2RenderingContext:ƒ WebGL2RenderingContext()
WebGLActiveInfo:ƒ WebGLActiveInfo()
WebGLBuffer:ƒ WebGLBuffer()
WebGLContextEvent:ƒ WebGLContextEvent()
WebGLFramebuffer:ƒ WebGLFramebuffer()
WebGLProgram:ƒ WebGLProgram()
WebGLQuery:ƒ WebGLQuery()
WebGLRenderbuffer:ƒ WebGLRenderbuffer()
WebGLRenderingContext:ƒ WebGLRenderingContext()
WebGLSampler:ƒ WebGLSampler()
WebGLShader:ƒ WebGLShader()
WebGLShaderPrecisionFormat:ƒ WebGLShaderPrecisionFormat()
WebGLSync:ƒ WebGLSync()
WebGLTexture:ƒ WebGLTexture()
WebGLTransformFeedback:ƒ WebGLTransformFeedback()
WebGLUniformLocation:ƒ WebGLUniformLocation()
WebGLVertexArrayObject:ƒ WebGLVertexArrayObject()
WebKitCSSMatrix:ƒ DOMMatrix()
WebKitMutationObserver:ƒ MutationObserver()
WebSocket:ƒ WebSocket()
WebTransport:ƒ WebTransport()
WebTransportBidirectionalStream:ƒ WebTransportBidirectionalStream()
WebTransportDatagramDuplexStream:ƒ WebTransportDatagramDuplexStream()
WebTransportError:ƒ WebTransportError()
WheelEvent:ƒ WheelEvent()
Window:ƒ Window()
WindowControlsOverlay:ƒ WindowControlsOverlay()
WindowControlsOverlayGeometryChangeEvent:ƒ WindowControlsOverlayGeometryChangeEvent()
Worker:ƒ Worker()
Worklet:ƒ Worklet()
WritableStream:ƒ WritableStream()
WritableStreamDefaultController:ƒ WritableStreamDefaultController()
WritableStreamDefaultWriter:ƒ WritableStreamDefaultWriter()
XMLDocument:ƒ XMLDocument()
XMLHttpRequest:ƒ XMLHttpRequest()
XMLHttpRequestEventTarget:ƒ XMLHttpRequestEventTarget()
XMLHttpRequestUpload:ƒ XMLHttpRequestUpload()
XMLSerializer:ƒ XMLSerializer()
XPathEvaluator:ƒ XPathEvaluator()
XPathExpression:ƒ XPathExpression()
XPathResult:ƒ XPathResult()
XRAnchor:ƒ XRAnchor()
XRAnchorSet:ƒ XRAnchorSet()
XRBoundedReferenceSpace:ƒ XRBoundedReferenceSpace()
XRCPUDepthInformation:ƒ XRCPUDepthInformation()
XRCamera:ƒ XRCamera()
XRDOMOverlayState:ƒ XRDOMOverlayState()
XRDepthInformation:ƒ XRDepthInformation()
XRFrame:ƒ XRFrame()
XRHitTestResult:ƒ XRHitTestResult()
XRHitTestSource:ƒ XRHitTestSource()
XRInputSource:ƒ XRInputSource()
XRInputSourceArray:ƒ XRInputSourceArray()
XRInputSourceEvent:ƒ XRInputSourceEvent()
XRInputSourcesChangeEvent:ƒ XRInputSourcesChangeEvent()
XRLayer:ƒ XRLayer()
XRLightEstimate:ƒ XRLightEstimate()
XRLightProbe:ƒ XRLightProbe()
XRPose:ƒ XRPose()
XRRay:ƒ XRRay()
XRReferenceSpace:ƒ XRReferenceSpace()
XRReferenceSpaceEvent:ƒ XRReferenceSpaceEvent()
XRRenderState:ƒ XRRenderState()
XRRigidTransform:ƒ XRRigidTransform()
XRSession:ƒ XRSession()
XRSessionEvent:ƒ XRSessionEvent()
XRSpace:ƒ XRSpace()
XRSystem:ƒ XRSystem()
XRTransientInputHitTestResult:ƒ XRTransientInputHitTestResult()
XRTransientInputHitTestSource:ƒ XRTransientInputHitTestSource()
XRView:ƒ XRView()
XRViewerPose:ƒ XRViewerPose()
XRViewport:ƒ XRViewport()
XRWebGLBinding:ƒ XRWebGLBinding()
XRWebGLDepthInformation:ƒ XRWebGLDepthInformation()
XRWebGLLayer:ƒ XRWebGLLayer()
XSLTProcessor:ƒ XSLTProcessor()
console:console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
decodeURI:ƒ decodeURI()
decodeURIComponent:ƒ decodeURIComponent()
encodeURI:ƒ encodeURI()
encodeURIComponent:ƒ encodeURIComponent()
escape:ƒ escape()
eval:ƒ eval()
event:undefined
globalThis:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
isFinite:ƒ isFinite()
isNaN:ƒ isNaN()
offscreenBuffering:true
parseFloat:ƒ parseFloat()
parseInt:ƒ parseInt()
undefined:undefined
unescape:ƒ unescape()
webkitMediaStream:ƒ MediaStream()
webkitRTCPeerConnection:ƒ RTCPeerConnection()
webkitSpeechGrammar:ƒ SpeechGrammar()
webkitSpeechGrammarList:ƒ SpeechGrammarList()
webkitSpeechRecognition:ƒ SpeechRecognition()
webkitSpeechRecognitionError:ƒ SpeechRecognitionErrorEvent()
webkitSpeechRecognitionEvent:ƒ SpeechRecognitionEvent()
webkitURL:ƒ URL()
[[Prototype]]:Window
PERSISTENT:1
TEMPORARY:0
constructor:ƒ Window()
Symbol(Symbol.toStringTag):"Window"
[[Prototype]]:WindowProperties


*/



