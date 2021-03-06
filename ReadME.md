### Front-end Technologies
- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular framework
- ReactJs(Library)
### Back-end Technologies
- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Python
### Databases
- MongoDB
- SQLite
- Firebase
- Postgressql
- Oracle
+ VCS (source code management)
	- Distributed VCS
		-Git,Mercurial
	- Remote (central) VCS
	-Github,Bitbucket
### Git
- git init
- git add filename
- git add filaname1 filename2 filename3
- git add . or git add --all(add all files)
- git status
- do configurations
	- git config --global user.name "Your Name"
	- git config --global user.email "you@example.com"
- comit data
	- git commit -m "ReadME.md and sample.html files are added"
- go to github
	- git remote add origin https://github.com/PerumalJaswithaReddy/SVEC89.git
- push to github
	- git push -u origin master
- update data
	- git add .
	- git commit -m "File modified"
	- git push origin master
- download from github
	- git clone https://github.com/PerumalJaswithaReddy/spacetourism.git

### HTML
- Hyper Text Markup Lanuage
- Common browsers-chrome,firefox,opera,internet explorer,safari
- HTML5-current version
- 3 categories
	- semantic elements
		- describes why the elements are used
		- Examples:header,section,article,aside,footer,table
	- block level elemnts
		- it will occupy entire width of browser
		- Example:headings:range h1 - h6,paragraph:p,div,all semantic elements 
		- text will start from new line
	- inline elements
		- Examples:spam,image,a,nav,all form elements,input,textarea,legend,sup,sub

### Task1 HTML elements
- audio
- vedio
- canvas
- progress
- meter
- datalist
- select
### CSS
+ Cascading Style Sheets
+ 3 ways to apply for html
	- Inline CSS
	- Internal CSS
	- External CSS
+ syntax of CSS
'''
selector{
	CSS properties
}
'''
- Priority
	- Inline>Internal>External
### Selectors
+ simple selectors
	- Universal selector(*)
	- By element name
	- Grouping selector (,)
	- Class selector
	- id selector
	- id has more priority than class
	- id is unique
+ combinators
	+  Descendant selector( )
	+ Child selector(>)
	+ Adjacent sibling selector(+)[can't override descendant selector]
	+ General sibling selector(~)
+ Pseudo class selector
+ Attribute selector
### Box model
+ margin[for entire border]
+ border
+ padding
	- 4 dimensions top,right,bottom,left
	- 3 top,left and right,bottom
	- 2 top and bottom,left and right
	- 1 all sides
+ 1rem=16px
+ width

### Task2
- indexpage.html
- login.html
- register.html
### Responsive web design
### Flex-box
+ display
	- none
	- inline
	- block
	- inline-block
	- flex
		- flex-wrap
		- justify-content
		- flex-direction
		- flex-flow
+ align-content
+ align-items
+ align-self
+ position
	- static
	- relative
	- absolute
	- fixed
	- sticky
### Media Quires
- Devices
	- Extra small devices(mobiles)[max-width:600px]
	- Small devices(large mobiles/small tablets)[min-width:600px]
	- Medium  devices(small laptops)[min-width:768px]
	- Large devices(desktops/large laptops)[min-width:992px]
	- Extra large devices(like LED devices)[min-width:1200px]

	'''
	@media only screen(min-width:320px) and (max-width=500px){ CSS code}

### Task 3 Navbar with responsive

### Animations

### Bootstrap 4.6 Framework
-  A CSS framework
- module(collection of functions ,classes ,etc)
- package(collection of modules)
- library(collection of packages)
- framework(collection of libraries)
- Two modes:offline and online
- Online 
	- CDN links
	- [https://getbootstrap.com/docs/4.6/getting-started/introduction/]
- Offline
	- getboostrap.com
- Bootstrap classes
	- container
	- container-fluid
	- jumbotron
	- bg-primary	
	- dropdown
	- card-deck
	- card-group
	- d-flex(similar to card-group)
	- marquee
	- text box
	- Grid system
		- syntax
			- col-sm-12
		- xs(Extra small devices)
		- sm(small devices)
		- md(medium devices)
		- lg(large devices)
		- xl(Extra large devices)
	- modal
		- extra large modal(modal-xl)
		- large modal(modal-lg)
		- small modal(modal-sm)
	- table
		- thead
		- tbody
		- borders
			- table
			- table-border
			- table-bordered
			- table-striped
			- table-hover
		


- background-color - bg
- text-white
- margin in bootstrap(m-* (0-5))
	- 0 --> 0 rem
	- 1 --> 0.25 rem (4px)
	- 2 --> 0.5 rem (8px)
	- 3 --> 1 rem (16px)
	- 4 --> 1.5 rem (24px)
	- 5 --> 3 rem (48px)
	- ml-5(margin left)
	- m(margin in all directions)
	- mt(margin top)[mt-2]
	- mb(margin bottom)[mb-3]
	- mr(margin right)
- padding (padding-left --> pl-5)
- colors
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white
	+ color classes used for 
		- buttons(ex:btn primary)
		- text(text-white)
		- background(bg-secondary)
		- alerts(alert alert-primary)

### JavaScript

+ To apply dynamic behaviour for a website
+ loosely tople and  dynamic language 
+ text based programming lanuage and provide oops concept
+ run on both client side and server side(Node.js) for dynamic web applications
+ 1995 'Brenden Eich' 
	- Initial version(ES-262)
	- ECMA-Script
		- ES features
			- let and constant
		- Functions
			- map()
			- arrow
			- typeof
			- 
		- classes
	- ES-11(Latest version)
+ Hoisting
+ datatypes
	- Number
	- String
	- Boolean
	- Undefine
	- Null
	- Object
	- Array
	- BigInt(2^53-1)

+ clg(console.log())


+ variables 
	- keywords:var,let,const
	- Scope
		- Function level -->var
		- Block level --> let and const
	- Redefine(using var and let we can redefine values but const can't be redefined)
	- Redeclare(var(with var) can be redeclared let and const can't be redeclared)

+ object
```
{
	name:"anhxdjk"
}
```

### Alerts

-  3 categories to generate notifications:alert,prompt(to take input from the user),confirm

+ Console statements
	- console.log()
	- console.info()
	- console.warn()
	- console.error()
+ spread opertor(...)
	- to change array elements from one array to another(swap)
	```
		...Variable_name
	```
+ rest parameter
	- to handle function paramaters
	```
		...parameter
	```
+ Destructuring of array and objects
+ Functions
	- function with functionname
	- anonymous function
	- Arrow function
	- settimeout
+ Loops
	- for-in(returns index )
	- for-of(returns values)
	- forEach() (ES-5)
	- map() (ES-6)

### DOM
+ Document Object Model
+ also Contains some browser objects:document,history,window,navigator
+ DOM methods(document.method_name())
	- document.getAnimations
    - document.getElementById-
    - document.getElementsByClassName-
    - document.getElementsByTagName-
	- document.getElementsByElementName-
    - document.getRootNode
    - document.getSelection
    - document.hasChildNodes
	- textcontent
	- innertext
	- appendChild
	- appendMain
	- innerHTML
	- setAttribute()
	- classList
	- style
	- src
	- querySelector()
+ textcontent is mostly used instead of innertext

### JSON
- Java Script Object Notation
- To exchange information between client and server
```
{
	"name":"abcd",
	"age":45,
	"salary":"5LPA",
	"mobile":7834632763
}
```
+ Ajax call or Promises(fetch API) or axios

### ReactJS
### Features of React JS
+ A library
+ It follows component based architecture
+ Compoents
	- Function components
	- Class components
	- Pure components
	- Higher order components
+ It provide virtual DOM
+ It provides JSX[JavaScript and XML]
+ Unidirectional dataflow
+ Single page applications can be implemented
+ Project Environment setup
	- with Node js
	- [https://nodejs.org/en/download/]
	- Download visual studio code
	- install node js and check versions of 'node' and 'npm'[node package manager]
		- node -v
		- npm -v
	- create project
		- install 'webpack' and 'babel'
		- using command 'create-react-app'
			- 'npm install create-react-app'
			- 'create-react-app <projectname> '
		- 'npx create-react-app appname' 
		- npx[node package runner]	
+ js files are called as components
+ Index.html
+ index.js
+ App.js
	+ Index page
		- nav.js
		- body.js
		- footer.js
		+ Home.js
		+ Login.js
		+ Register.js

+ Class component
	- creation [import React ,{Component} from 'react';]
	```
	class Classcomponentname extends Component{render(){return();}}
	export default Classcomponentname;
	```

+ Functional component
	- creation
		```
		function Functionalcomponentname(){return();}
		export default Functionalcomponentname;
		```
+ Import class and functional componnets
	```
	import Functional from './components/Functional';
	// in render
	<Functional/>
	```


	```
	import Classcomponent from "./Classcomponent";
	// In Render
	<> 
      <Classcomponent/>
    </>
	```

+ props
	- to pass data from one component to another component,props are used
	- props are immutable
	
	+ Union bank(Functional)
		- Andhra bank(Functional)
		- corporation(Class)

+ snippets
	- rfc
	- rfce
	- rcc
	- rconst

+ States

- In react to maintain information we can use States
- To maintain state in react the syntax is as follows
- States are maintained in classs components only before version 16.8
- To take state in react, try  to create constructor above render method and inside class component


```
constructor(){
	super();
	this.state={

	}
}
```

- To update state information in class component, use setstate() method
- To update information in class component we have to follow component life cycle methods
	+ componentDidMount()
	+ componentWillMount
	+ shouldComponentUpdate()
	+ componentWillUpdate()
	+ componentWillUnmount()
	+ componentWillReceiveProps()
	+ componentDidUpdate()

- To maintain information in functional components hooks are used

### Hooks
- from React 16.8 version Hooks are introduced
- Parent- Child1--> Child2 --> Child3
- usestate()
- useEffect()
- useMemo()
- useRef()
- useContext()

- form handling
- event handling
- list rendering

### Event handling and form rendering

- onChange
- onSubmit
- preventDefault()

### Routing in react
+ To navigate (route) from one component to another
	- install 'react-router-dom' package
		- Command-`npm install react-router-dom`
		- 'BrowserRouter'
		- 'Routes'
		- 'Route'
		- 'link'
		- 'element'
		- 'path'

+ Redux 

- To maintain entire project information

#### Reference links
- Flaticon [https://flaticon.com/]
- Color codes
	- html color codes[https://htmlcolorcodes.com/]
	- webaim contrast checker[https://webaim.org/resources/contrastchecker/]
	- javascript [https://jsonlint.com/]
	- [https://jsonplaceholder.typicode.com/posts]
- Download Node-js [https://nodejs.org/en/download/]
- Download Visual Studio code[https://code.visualstudio.com/download]
- [http://localhost:3000/]


