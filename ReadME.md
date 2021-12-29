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
### Reference links
- Flaticon [https://flaticon.com/]
- Color codes
	- html color codes[https://htmlcolorcodes.com/]
	- webaim contrast checker[https://webaim.org/resources/contrastchecker/]
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
	- https://getbootstrap.com/docs/4.6/getting-started/introduction/
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
	
-marquee


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

