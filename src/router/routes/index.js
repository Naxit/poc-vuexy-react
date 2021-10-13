// ** Routes Imports
import ResourcesRoutes from './Resources'
import SitesRoutes from './Sites'
import ServicesRoutes from './Services'

import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'


// ** Document title
const TemplateTitle = '%s - POC Vuexy React Template'


// ** Default Route
const DefaultRoute = '/resources/list'


// ** Merge Routes
const Routes = [
  ...ResourcesRoutes,
  ...SitesRoutes,
	...ServicesRoutes,

  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
