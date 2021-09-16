<template>
  <div>
    <div class="modal copy" >
      <div class="modal__promote">
        <div class="modal__promote-title">
          Public shareable link
        </div>
        <div class="modal__promote-link">
          uncommongood.com/sweepstakes
        </div>
        <div class="modal__promote-buttons">
          <button @click="close" class="modal__promote-cancel">Cancel</button>
          <button class="modal__promote-copy">Copy link</button>
        </div>
        <img @click="close" src="../assets/images/cross.png" alt="cross" class="modal__promote-cross">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalPromote',
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      close() {
        this.$emit('close');
      },
    }
  }
</script>

<style lang="scss">
.modal {
  position: absolute;
  width: 677px;
  height: 417px;
  left: 30%;
  top: 30%;
  background: #F2EEF9;
  z-index: 1;
  &__promote {
    width: 543px;
    height: 281px;
    background: #FFFBFB;
    border-radius: 16px;
    margin: 10% auto;
    &-title {
      font-family: InterBold, sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #63517A;
      padding-top: 64px;
    }
    &-link {
      background: #FFFFFF;
      border: 1px solid #EFEFEF;
      box-sizing: border-box;
      border-radius: 40px;
      font-family: InterBold, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #63517A;
      width: 305px;
      margin: 24px auto;
      height: 51px;
      padding-top: 15px;
    }
    &-buttons {
      display: flex;
      width: 303px;
      justify-content: space-between;
      margin: 34px auto;
    }
    &-cancel {
      background: #F2EEF9;
      border-radius: 54px;
      color: #63517A;
      border: none;
      height: 50px;
      width: 141px;
      font-family: InterBold, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;
    }
    &-copy {
      box-shadow: 0 6px 10px rgba(237, 188, 51, 0.3);
      background: url(../assets/images/link.png) no-repeat 27px, #EDBC33;
      border-radius: 30px;
      color: #FFFFFF;
      border: none;
      height: 50px;
      width: 141px;
      font-family: InterBold, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      padding-left: 29px;
      cursor: pointer;
    }
    &-saved {
      border-radius: 30px;
      color: #FFFFFF;
      border: none;
      height: 50px;
      width: 141px;
      font-family: InterBold, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      background-color: #71B078;
      cursor: pointer;
    }
    &-cross {
      border: 1px solid #F2EEF9;
      box-sizing: border-box;
      border-radius: 8px;
      position: absolute;
      right: 77px;
      top: 78px;
      padding: 12px;
      cursor: pointer;
    }
  }
}
</style>