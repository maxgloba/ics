<template>
  <section class="content">
    <div class="container">
      <Slider v-if="winWidth < 768" />
      <button class="btn btn-yellow">CryptoLibertyStorks</button>
      <button class="btn btn-violet">view opensea
        <svg width="25" height="25" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50012 2L31.5001 2M31.5001 2L31.5001 26M31.5001 2L1.50012 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="content-desc"><span>STORKS VS ORCS</span> <br><br>Evil spirits bringing pain and terror attack a prosperous country where free and happy storks live. Storks of different professions and views stood up to defend their homes to give a worthy resistance to evil. <br><br><b>Eternal memory and glory to the Heroes!</b></div>
      <div class="content-desc"><span>ABOUT PROJECT</span> <br><br>We have one GREAT goal to be gained - to save Ukrainians as a people who are destined to be a GREAT nation within our support made up in a simple way. <br><br>NFT Storks represented in a super crucial way of storks delivering happiness through children's warmth right in mother’s hands. Same as we produce our NFT through volunteering, from 50% to the whole price would be given for charity. Everything you pay will be strictly donated for material and military needs to save Ukraine. Like our mothers save their children you can save somebody’s life. <br><br>We are Ukrainians! <br><br>Each person from our little creative family dreams of peace and freedom. Let’s make our lives free! We truly appreciate every single donation you make to get our aim to the highest point. Together we will gain good and defeat the bad. <br><br><b>Help the storks defeat the orcs!</b></div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      winWidth: 0
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
.content{
  @media(min-width:768px){
    padding: 30px;
  }
  .btn{
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    color: #0B0B0B;
    text-transform: uppercase;
    border-radius: 80px;
    border: none;
    padding: 18px 20px;
    margin: 10px 0;
    width: 100%;
    transition: background .5s ease;
    @media(min-width:768px){
      width: calc(50% - 15px);
      font-size: 30px;
      padding: 0 45px;
      line-height: 100px;
      height: 100px;
    }
    &-yellow{
      background: #FEEF00;
    }
    &-violet{
      background: #AB8BFD;
      @media(max-width:767px){
        order: 2;
      }
    }
    &:hover{
      background: #4488EE;
    }
  }
  .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-desc{
    font-weight: 200;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    border: 3px solid #2B2B2B;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    margin: 10px 0;
    @media(min-width:768px){
      font-size: 21px;
      line-height: 25px;
      width: calc(100% - 360px - 30px);
    }
  }
  .content-desc{
    flex-grow: 1;
  }
}
</style>