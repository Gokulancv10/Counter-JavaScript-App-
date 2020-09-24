let count = 0;

const value = document.querySelector('#value');
const button = document.querySelectorAll('button');

button.forEach((btn)=>{
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;

        if(styles.contains("increase")){
            count++;
        }
        else if(styles.contains("decrease")){
            count--;
        }
        else{
            count = 0;
        };

        if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'grey';
        };
        value.textContent = count;
    }); 

});