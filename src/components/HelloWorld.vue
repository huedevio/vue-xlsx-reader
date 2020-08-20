<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    
  </div>
</template>

<script>

import spreadsheet from '../../sheet.xlsx'
import xlsx from 'xlsx'

console.log("Test1" + spreadsheet.SheetNames) // ['Sheet1']
 
const csvString = xlsx.utils.sheet_to_csv(spreadsheet.Sheets['Sheet1'])
console.log("Test2" + csvString)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
