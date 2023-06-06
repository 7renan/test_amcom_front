export function getDateFormat(dateString: string){
  var date = dateString.split('T')[0]
  var hour = dateString.split('T')[1]
  hour = hour.split('.')[0]
  date = date.split('-').reverse().join('/')
  return `${date} - ${hour}`
}