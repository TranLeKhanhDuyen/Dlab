export interface PageType {
  key: number
  value: string
  path: string
  search?: string
}
export type PagesType = PageType[]

export interface TabType {
  key: number
  value: string | JSX.Element
}
export type TabsType = TabType[]
