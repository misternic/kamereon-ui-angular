# kamereon-ui-angular

<center>

![Logo](public/logo.svg)

</center>


## build and publish npm package

```
npm run build
npm publish dist/kamereon-ui-angular
```

## use kameraon in angular

```
npm install kamereon-ui-angular
```

add import in src/style.scss

```
@import "../node_modules/kamereon-ui-angular/src/assets/styles/main.scss";
```

and add file `.postcssrc.json`

```
{
	"plugins": {
		"@tailwindcss/postcss": {}
	}
}
```

## neue component hinzufügen

```
cd projects/kamereon-ui-angular/src/lib
ng g c NeueComponent


```

