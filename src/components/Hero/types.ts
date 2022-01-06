export type HeroProps = {
    title?: string
    subtitle?: string
    imgURL?: string
    onSearch?: (searchTerm: string) => void
    searchFieldPlaceholder?: string
}
