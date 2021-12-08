var arr = [];
var i = 0;
arr[i] = prompt('Введите строку');
while(arr[i] !== '')
{
i++;
arr[i] = prompt('Введите строку');
}
arr.splice(-1,1);
html = '<ul>';
arr.forEach(function(item, i, arr) {
html += '<li>'+item+'</li>';
});
html += '</ul>'
document.write(html);