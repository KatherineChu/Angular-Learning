# AORS Angular Basic Training #
- Period: 8 Weeks
- Review: once a week

## pre-work ##
- install Node.js & npm
	- https://nodejs.org/en/
- install typescript
	- ```npm install -g typescript```
- install IDE
	- VS code: https://code.visualstudio.com/ (全世界都推薦)
	- Sublime: https://www.sublimetext.com/ (不管, 我還是要用sublime)
- install Angular CLI
	- ```npm install -g @angular/cli```
- (optional) javascript basic understanding
	- https://www.w3schools.com/js/
- (optional) HTML basic understanding
	- https://www.w3schools.com/html/
- (optional) CSS basic understanding
	- https://developer.mozilla.org/zh-TW/docs/Learn/CSS/First_steps
	- https://www.w3schools.com/w3css/default.asp


## item 0 - Quick introduction ##
- Hand-to-hand
	- 急速TypeScript範例
	- 急速Angular建置
	- 急速Angular打包部署

## item 1 - TypeScript 基礎概論 ##
- Learning target
	- 基礎關係: ECMAScript / JavaScript / TypeScript / Node.js / npm / Angular 之間的關係
	- 語言特性: 動態語言 / 靜態語言 / 強型別語言 / 弱型別語言
	- 型別總覽: 原始型別(Primitive Types) / 物件型別(Object Types) / 明文型別(Liter Types) / 特殊型別(any, never, unknow)
	- TypeScript獨有型別: Tuple / Enum / 泛用型別(Generic Types) / 鍵值對(key-value pair) / 索引型別(Index Type)
	- 複合型別: 聯集型別 / 交集型別
	- 型別註記: 型別註記(Annotations) / 斷言型別(Assertion)
	- 編譯與執行TypeScript
- Reference
	- TypeScript Documentation: https://www.typescriptlang.org/docs/
	- Programming TypeScript: https://learning.oreilly.com/library/view/programming-typescript/9781492037644/
- Execrise
	- 撰寫TypeScript程式: 原始型別 / 物件型別 / 明文型別 / 特殊型別 / Tuple / Enum / 泛用型別 / 鍵值對 / 索引型別
	- 撰寫型別註記
	- 編譯與執行上述內容
- What I learn?
	- 我知道前端語言的關係
	- 我知道語言的特性, 我知道TypeScript屬於哪種語言特性
	- 我知道TypeScript的型別有哪些, 怎麼使用, 何時使用
	- 我知道該怎麼給定型別註記
	- 我會編譯與執行TypeScript

## item 2 - TypeScript 重點型別細節 ##
- Learning target
	- TypeScript設定參數: tsconfig.json
	- 型別化名(Type Alias)
	- 宣告細節: let / const / var
	- 物件宣告細節: 無屬性宣告與完整宣告 / 選用屬性(Optional Property) / 唯獨屬性(Read-Only Property)
	- 函式型別細節: 非必填參數 / 預設參數 / 回傳值型別註記
	- 陣列型別細節: 同質性陣列 / 異質性陣列
	- 列舉型別細節: 預設型別推論 / 自訂義型別
	- 複合型別細節: 型別化名串接多型別 / typeof / instanceof / hasOwnProperty
	- (optional) ES6解構式 / 展開操作符 / 非強制串接操作符 / 空值結合操作符 / Promise / 裝飾子(decorator)
- Reference
	- TypeScript tsconfig document: https://www.typescriptlang.org/tsconfig/
	- TypeScript Documentation: https://www.typescriptlang.org/docs/
- Execrise
	- 調整tsconfig.json, 測試strict設定有無打開時的編譯差異 (也可研究一下其他設定)
	- 撰寫TypeScript程式: 物件宣告, 函式, 陣列, 列舉, 複合型別 並說明各項細節內容
	- 撰寫TypeScript程式: 展示typeof判別, instanceof判別, hasOwnProperty判別
- What I learn?
	- 我知道怎麼修改TypeScript編譯設定
	- 我知道什麼是型別化名
	- 我知道如何宣告物件, 函式, 陣列, 列舉, 複合型別

## item 3 - TypeScript 類別與物件導向 ##
- Learning target
	- 物件導向基礎: 封裝 / 繼承 / 多型 / 超載(overload)
	- 物件導向設計原則: SOLID原則
	- TypeScript類別: class / constructor(內外屬性宣告) / 屬性(預設,選填) / 存取修飾字(public,private,protected) / get / set
	- 其他類別內容: 靜態成員 / 唯獨成員
	- 類別繼承 / 抽象類別 / 介面 / 泛型 / 型別化名vs介面
	- 輸入與輸出類別: Import / Export
- Reference
	- TypeScript Documentation: https://www.typescriptlang.org/docs/
	- Programming TypeScript: https://learning.oreilly.com/library/view/programming-typescript/9781492037644/
- Execrise
	- 請撰寫TypeScript專案包含以下內容
		- 設計書與書店兩個資料模型
		- 以controller / service / repository的概念撰寫各層級的服務, 並依層級輸入使用
		- 不用串接資料庫, 以寫死內容或log註記存取狀況即可
		- 撰寫一個入口點執行書與書店的CRUD
- What I learn?
	- 我知道OOP觀念
	- 我知道SOLID原則
	- 我知道怎麼撰寫類別
	- 我知道類別的成員與何時使用這些成員
	- 我知道繼承, 抽象與介面的不同
	- 我知道型別化名和介面不同之處

## item 4 - 哈囉 Anuglar ##
- Learning target
	- Angular專案結構: 資料夾與檔案內容 / app / asserts / environments
	- Angular重要組成: 元件(component) / 範本(template) / 指令(directives)
	- 建立元件: CLI生成元件 / 註冊元件 / 使用新元件 / 資料連結 / 屬性連結 / 事件連結
	- 建立模型物件: CLI生成class
	- 內建指令(directives): 屬性指令(ngClass, ngStyle) / 結構指令(ngIf, ngFor, ngSwitch)
	- 元件生命週期
	- 元件輸入與輸入: @Input / @Output
	- (optional) 自定義屬性指令 / 自定義結構指令
- Reference
	- Angular Documentation: https://angular.tw/docs
	- Angular Lifecycle-hooks https://angular.io/guide/lifecycle-hooks
- Execrise
	- 請建立一個全新的Angular專案包含以下內容
		- 一個畫面包含書與書店的清單
		- 請使用到模型物件來代表書和書店 (書與書店的屬性自訂)
		- 書與書店的清單資料來源先寫死
		- 請使用到屬性指令與結構指令
		- CSS可參考bootstrap, 或著不套用
- What I learn?
	- 我知道Angular專案資料夾結構與各檔案負責內容
	- 我知道什麼是元件, 範本與指令
	- 我了解內建的屬性指令與結構指令
	- 我知道怎麼用CLI建立新元件
	- 我知道元件的生命週期
	- 我知道元件怎麼與畫面做資料連結, 屬性連結與事件連結
	- 我知道怎麼用CLI生成模型物件
	- 我知道怎麼做元件的輸入與輸出

## item 5 - Angular 表單與服務 ##
- Learning target
	- 表單: 模板驅動表單(FormsModule) / 反應式表單(ReactiveFormsModule)
	- 模板驅動表單: 基礎事件連結 / ngModel / ngModelGroup / ngSubmit / 模板參考變數
	- 反應式表單: FormControl / FormGroup / FormBuilder / FormArray
	- 建立服務: CLI生成service / 註冊服務 / 相依注入(DI)
	- 非同步操作: RxJS與可觀察物件(Observable)
- Reference
	- Angular Documentation: https://angular.tw/docs
	- RxJS: https://rxjs.dev/guide/overview
	- Observable: https://angular.io/guide/observables
- Execrise
	- 請修改item 4的execrise達到以下內容
		- 在書與書店清單上加入表單, 可以讓使用者建立書與書店
		- 可以修改與刪除書和書店內容
		- 請修改程式架構, 元件注入服務, 以服務提供表單服務的內容
		- 修改服務, 以Observable提供元件資料
- What I learn?
	- 我知道Angular表單, 我會做Anuglar表單
	- 我知道怎麼建立服務
	- 我知道什麼是相依注入, 我知道怎麼在元件注入服務
	- 我知道非同步操作與可觀察物件


## item 6 - Angular HTTP客戶端與導向路由 ##
- Learning target
	- 基礎知識: RESTful / Http / Route
	- 基礎使用: HttpClient / get / post / put /delete
	- 進階使用: http header / http parameter / observe / responseType
	- 攔截: interceptor
	- 建立路由: RouterModule / routerLink / routerLinkActive
	- 路由變化: 路徑參數與使用 / 路徑轉導
	- 路徑保護: canActivate / canDeactivate
	- (optional) Angular Resolver
- Reference
	- Angular http: https://angular.io/guide/http
	- Angular Route: https://angular.io/guide/routing-overview
	- Angular Resolver: https://angular.io/api/router/Resolve
- Execrise
	- 找回java basic training的書與書店Spring boot 專案 (或自己建立一個後端)
	- 修改item 5的程式碼, 在Angular服務中套用httpClient, 向後端伺服器請求CRUD
	- 加入攔截器, 在送出請求與收到回覆時寫log
	- 使用Route拆分書與書店兩個頁面
	- 書與書店的頁面可由路徑參數(符合RESTful), 直接顯示指定的內容
	- 使用路徑保護, 若沒有特定權限的人將無法直接查詢, 自動導回首頁
- What I learn?
	- 我知道怎麼使用Angular送出http請求
	- 我知道怎麼夾帶header, parameter
	- 我知道怎麼攔截http request
	- 我知道怎麼設定路由, 路由轉導
	- 我知道怎麼做路徑進入檢核


## item 7 - Angular 測試 ##
- Learning target
	- 元件測試 / 服務測試
	- 測試DI注入 / 使用真實服務測試 / 元件注入假的服務測試 / 非同步單元測試 / http請求測試
	- 測試語法: describe / it / expect
- Reference
	- Angular test : https://angular.io/guide/testing
- Execrise
	- 使用item 6的程式碼, 針對元件與服務撰寫測試
- What I learn?
	- 我知道怎麼做Angular測試
	- 我會使用Angular測試語法


## (optional) item 8 - Angular Material ##
- Learning target
	- Angular UI Component Library: primeNG / Angular Material / ...
	- icon與顏色配置: MatIcon
	- 表單相關元件-1: Button / SideNav / Toolbar / List / Menu / stepper / input / autocomplete
	- 表單相關元件-2: datepicker / select / Form Field / Check / Radio / Toggle / Slider
	- 其他漂亮顯示: Slider / Grid List / Card / Progress / Dialog / Chip / tooltip
	- 頁面變化: Panels / Tabs / Table
	- (optional) Angular CDK
		- Accessibility / Observables / Layout / Overlay / Portal / Bidirectionality / Scrolling
- Reference
	- Angular Material: https://material.angular.io/
	- primeNG: https://www.primefaces.org/primeng/
- Execrise
	- 使用item 7的程式碼, 調整template套用Angular Material
- What I learn?
	- 我會使用Angular Material建立漂亮的畫面


## 自行延伸閱讀 ##
- JavaScript The Definitive Guide: https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/
- Effective JavaScript: https://learning.oreilly.com/library/view/effective-javascript-68/9780132902281/
- Effective TypeScript: https://learning.oreilly.com/library/view/effective-typescript/9781492053736/
- Angular up & running: https://learning.oreilly.com/library/view/angular-up-and/9781491999820/
- Angular Coding Style: https://angular.tw/guide/styleguide
