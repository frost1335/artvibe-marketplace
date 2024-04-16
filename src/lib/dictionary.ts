import 'server-only'
import type { Locale } from '../i18n.config'

const dictionaries = {
    en: () => import('@/translations/en.json').then(module => module.default),
    uz: () => import('@/translations/uz.json').then(module => module.default),
    ru: () => import('@/translations/ru.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()