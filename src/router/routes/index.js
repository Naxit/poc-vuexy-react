// ** Routes Imports
import AgentsRoutes from './Agents'
import SitesRoutes from './Sites'

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
const DefaultRoute = '/agents/list'


// ** Merge Routes
const Routes = [
  ...AgentsRoutes,
  ...SitesRoutes,

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
