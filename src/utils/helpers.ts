import { TabType } from 'pages/types'

export const getInitTab = ({ initTab, tabs }: { initTab: string; tabs: TabType[] }) => {
  let result = Object.values(tabs)[0]['key']
  if (!initTab) return result
  for (const tab of tabs) {
    if (tab['name'] === initTab) {
      result = tab['key']
    }
  }
  return result
}
