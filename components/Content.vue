<template>
  <section class="content">
    <div class="container">
      <button class="btn btn-yellow">LIBERTY CRYPTOSTORKS</button>
      <button class="btn btn-violet">view opensea</button>
      <div class="content-desc">Evil spirits bringing pain and terror attack a prosperous country where free and happy storks live. Storks of different professions and views stood up to defend their homes to give a worthy resistance to evil. <br><br><b>Eternal memory and glory to the Heroes!</b></div>
      <div class="content-disc">
        <span class="yellow">50%-100% of the received funds are directed for charity.</span>
        <span class="blue">ETH cryptocurrency donate</span>
        0x8E37E680b4016F9454Be64a2639Ea132dbdd3398
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
.content{
  padding: 0 0 30px;
  .btn{
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 33px;
    line-height: 100px;
    height: 100px;
    text-align: center;
    color: #0B0B0B;
    text-transform: uppercase;
    border-radius: 80px;
    padding: 0 45px;
    margin: 10px 0;
    width: calc(50% - 15px);
    transition: background .5s ease;
    &-yellow{
      background: #FEEF00;
    }
    &-violet{
      background: #AB8BFD;
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
    font-weight: 300;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    border: 3px solid #2B2B2B;
    border-radius: 30px;
    padding: 20px;
    width: calc(100% - 360px - 30px);
    margin: 10px 0;
  }
  &-disc{
    margin: 10px 0;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
    width: 360px;
    word-break: break-word;
    padding: 20px 0;
    span{
      display: block;
      font-weight: 700;
    }
    .yellow{
      color: #FEEF00;
      margin-bottom: 10px;
    }
    .blue{
      color: #4488EE;
    }
  }
}
</style>