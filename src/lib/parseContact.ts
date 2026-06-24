export function splitContact(contact: string): { phone: string; telegram: string } {
  const value = contact.trim()
  if (!value) return { phone: '', telegram: '' }

  if (value.startsWith('@')) {
    return { phone: '', telegram: value }
  }

  const digitsOnly = value.replace(/\D/g, '')
  if (value.startsWith('+') || (digitsOnly.length >= 9 && /^[\d\s+\-()]+$/.test(value))) {
    return { phone: value, telegram: '' }
  }

  const username = value.replace(/^@/, '')
  return { phone: '', telegram: `@${username}` }
}
