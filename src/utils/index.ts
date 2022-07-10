export const storage = {
    prefix: 'AIA_',
    setItem: (key: string, value: any) => {
        window.localStorage.setItem(storage.prefix + key, JSON.stringify(value))
    },
    getItem: (key: string) => {
        return JSON.parse(localStorage.getItem(storage.prefix + key) as string)
    },
    removeItem: (key: string) => {
        window.localStorage.removeItem(storage.prefix + key)
    },
    removeAll: () => {
        window.localStorage.clear()
    },
}