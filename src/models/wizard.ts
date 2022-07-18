/**
 * Theses types are used by the Wizard form
 *
 * @see /src/pages/wizard-v1.vue
 * @see /src/components/partials/wizard
 */
import type { Ref } from 'vue'

export type WizardRelatedTo = 'طراحی تجربه کاربری' | 'توسعه وب‌سایت' | 'مارکتینگ'
export type WizardBudget =
  | 'زیر 5 میلیون تومان'
  | 'زیر 15 میلیون تومان'
  | 'زیر 25 میلیون تومان'
  | 'بالای 25 میلیون تومان'
export type WizardTeammateRole = 'reader' | 'collaborator' | 'manager' | 'owner'

export interface WizardTimeFrame {
  start: Date
  end: Date
  range: Array<string>
}
export interface WizardTeammate {
  name: string
  picture: string
  role: WizardTeammateRole
}
export interface WizardCustomer {
  name: string
  logo: string
  location: string
}
export interface WizardTool {
  name: string
  logo: string
  description: string
}

export interface WizardAttachement {
  name: string
  size: number
  type: string
  dataURL?: string
  upload: {
    uuid: string
    url?: string
  }
}
export interface WizardData {
  name: string
  description: string
  logo: File | null
  attachments: WizardAttachement[]
  relatedTo: WizardRelatedTo
  timeFrame: Ref<WizardTimeFrame>
  budget: WizardBudget
  teammates: WizardTeammate[]
  tools: WizardTool[]
  customer: WizardCustomer | null
}
