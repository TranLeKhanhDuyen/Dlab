import { cloneElement } from 'react'

import { ContentComponentsType, TabsType } from 'pages/types'

function ContentSelection({
  tabs,
  currentTab,
  components,
}: {
  tabs: TabsType
  currentTab: number
  components: ContentComponentsType
}) {
  const component = components[currentTab]
  const queryId = tabs[currentTab].queryId

  return cloneElement(component, { queryId, currentTab, tabs })
}

export default ContentSelection
