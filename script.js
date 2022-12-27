let $list = document.querySelector('.list')


let url = "https://www.cbr-xml-daily.ru/daily_json.js"

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        let valute = data.Valute
        Object.keys(valute).forEach(function(elem){
            let item = valute[elem]
            $list.insertAdjacentHTML('beforeend', `
                <div class="valute">
                    <img crossorigin = 'anonymous' src="https://countryflagsapi.com/png/${item.NumCode}">
                    <p>${item.CharCode}</p>
                    <!-- <p>${item.Name}</p> -->
                    <p>${item.Nominal}</p>
                    
                    <p>${item.Value} RUB</p>
                </div>
            `)
        })
        // let $input = document.querySelector('input')
        // let $result = document.querySelector('.result')
        // $input.addEventListener('change', function() {
        //     console.log('yes')
        // })
    })

let $listBtn = document.querySelector('#listBtn')
let $calc = document.querySelector('#calc')
let $pageList = document.querySelector('.pageList')
let $pageCalc = document.querySelector('.pageCalc')

$listBtn.addEventListener('click', function(){
    $pageList.classList.remove('hide')
    $pageCalc.classList.add('hide')
})
$calc.addEventListener('click', function(){
    $pageList.classList.add('hide')
    $pageCalc.classList.remove('hide')
})

let $result = document.querySelector('.calc__result')

$pageCalc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('calc__btn')) return;

    let value = event.target.innerText;
    
    switch(value) {
        case 'C':
            $result.innerText = '';
            break;
        case '=':
    if($result.innerText.search(/[^0-9*/+-]/mi) != -1) return;
            $result.innerText = eval($result.innerText).toFixed(2);
            break;
        default:
            $result.innerText += value
    }

})