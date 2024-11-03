export function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
  return `+${format && format[1] ? format[1] : ''}
          ${format && format[2] ? format[2] : ''}
          ${format && format[3] ? format[3] : ''}
          ${format && format[4] ? format[4] : ''}
          ${format && format[5] ? format[5] : ''}`
}

export function convertBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  let unitIndex = 0
  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024
    unitIndex++
  }

  const unit = units[unitIndex]
  return bytes?.toFixed(2) + ' ' + unit
}
