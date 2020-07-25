(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(9),r=(a(0),a(161)),l={id:"operators",title:"Operators"},c={id:"specification/operators",isDocsHomePage:!1,title:"Operators",description:"Unary Operators",source:"@site/docs/specification/operators.md",permalink:"/docs/specification/operators",editUrl:"https://github.com/whistle-lang/website/edit/master/website/docs/specification/operators.md",sidebar:"someSidebar",previous:{title:"Grammar",permalink:"/docs/specification/grammar"}},O=[{value:"Unary Operators",id:"unary-operators",children:[]},{value:"Binary Operators",id:"binary-operators",children:[{value:"Arithmetic Operators",id:"arithmetic-operators",children:[]},{value:"String Operators",id:"string-operators",children:[]},{value:"Comparison Operators",id:"comparison-operators",children:[]},{value:"Logical Operators",id:"logical-operators",children:[]},{value:"Bitwise Operators",id:"bitwise-operators",children:[]},{value:"Assignment Operators",id:"assignment-operators",children:[]}]},{value:"Conditional Operator",id:"conditional-operator",children:[]}],j={rightToc:O};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"unary-operators"},"Unary Operators"),Object(r.b)("p",null,"Unary operators appear before the operand in ",Object(r.b)("em",{parentName:"p"},"Whistle")," and modifies it in a set way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"operator operand\n")),Object(r.b)("p",null,"For exampe ",Object(r.b)("inlineCode",{parentName:"p"},"-10")," where ",Object(r.b)("inlineCode",{parentName:"p"},"-")," is the operator and ",Object(r.b)("inlineCode",{parentName:"p"},"10")," is the operand."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Signed Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The arithmetic negate operator negates the sign of the operand")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"!")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The logical not operator inverts the operand")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"~")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bitwise not operator inverts the bits of the operand")))),Object(r.b)("h2",{id:"binary-operators"},"Binary Operators"),Object(r.b)("p",null,"Binary operators appear between to operands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"operand operator operand\n")),Object(r.b)("p",null,"For exampe ",Object(r.b)("inlineCode",{parentName:"p"},"5 - 10")," where ",Object(r.b)("inlineCode",{parentName:"p"},"-")," is the operator, ",Object(r.b)("inlineCode",{parentName:"p"},"5")," and ",Object(r.b)("inlineCode",{parentName:"p"},"10")," is the operands."),Object(r.b)("h3",{id:"arithmetic-operators"},"Arithmetic Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"**")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The exponentiation operator calculates the left operands to the power of the right")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"*")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The multiplication operator multiplies the operands")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The division operator divides the operands")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"%")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The modulo operator calculates the remainder operands")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"+")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The addition operator adds the operands")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The subtraction operator subtracts the operands")))),Object(r.b)("h3",{id:"string-operators"},"String Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"+")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Concatinates the right operand to the left")))),Object(r.b)("h3",{id:"comparison-operators"},"Comparison Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},">=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the left operand greater than or equal to the right operand?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},">")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the left operand greater than the right operand?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the left operand less than or equal to the right operand?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is the left operand less than the right operand?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"==")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Are the operands equal?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"!=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Are the operands unequal?")))),Object(r.b)("h3",{id:"logical-operators"},"Logical Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"&&")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Are both the operands true?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`")))),Object(r.b)("h3",{id:"bitwise-operators"},"Bitwise Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<<")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bitwise left shift operator shifts the left operand in binary representation right operand number of bits to the left")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},">>")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bitwise left shift operator shifts the left operand in binary representation right operand number of bits to the right")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"&")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bitwise and operator returns a one in each bit position for which the corresponding bits of both operands are ones")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"^")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bitwise xor returns a zero in each bit position for which the corresponding bits are the same")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer")))),Object(r.b)("h3",{id:"assignment-operators"},"Assignment Operators"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"precedence"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operator"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"operand"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description/equivalent"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"**=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand ** right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"*=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand * right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"/=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand / right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"%=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand % right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"+=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand + right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"+=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand + right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand - right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},">>=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand >> right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"<<=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand << right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"&=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand & right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"^=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand ^ right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"&&=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"left_operand = left_operand && right_operand"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=`")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"21"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"=")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assigns the right value to the left")))),Object(r.b)("h2",{id:"conditional-operator"},"Conditional Operator"),Object(r.b)("p",null,"The conditional operator is the only operator which takes three operands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"operand if operand else operand\n")),Object(r.b)("p",null,"Where the first operand signifies the value if the second operand is true, otherwise the third operand is the value of the operation."))}p.isMDXComponent=!0}}]);