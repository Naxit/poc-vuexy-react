// ** Navigation sections imports
import agents from './agents'
import sites from './sites'
import services from './services'

import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'


// ** Merge & Export
export default [
	...agents,
	...sites,
	...services,
	...dashboards,
	...apps,
	...pages,
	...uiElements,
	...forms,
	...tables,
	...chartsAndMaps,
	...others
]
