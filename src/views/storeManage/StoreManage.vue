<template>
  <div class="estoreManage__warpper">
    <div class="filter__box">
      <Button style="margin-left: 10px" type="primary" @click="handleOutScore"
        >出库</Button
      >
    </div>
    <div class="view">
      <Table :columns="columns" :data="tableData">
        <template slot-scope="{ row }" slot="action">
          <Button
            style="margin-left: 10px"
            type="primary"
            @click="editItem(row)"
            >编辑</Button
          >
        </template>
      </Table>
      <div class="page__tools">
        <Page @on-change="changePage" :total="total" show-total />
      </div>
    </div>
    <Modal
      v-model="modalInfo.status"
      title="编辑库存"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <FormItem label="剩余库存" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      v-model="outStore.status"
      title="出库信息"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <Divider orientation="left">织物</Divider>
        <FormItem label="物品A" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <Divider orientation="left">包</Divider>
        <FormItem label="物品A" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <Divider orientation="left">鞋</Divider>
        <FormItem label="物品A" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "estoreManage",
  data() {
    return {
      outStore: {
        status: false
      },
      total: 100,
      googsSourceOption: [
        {
          label: "渠道",
          value: 0,
        },
        {
          label: "代理商",
          value: 1,
        },
      ],
      deleteModal: {
        status: false,
        data: {},
      },
      estoreManageOption: [
        {
          value: "张三",
          label: "张三",
        },
      ],
      modalInfo: {
        status: false,
        data: {},
      },
      columns: [
        {
          title: "物品名称",
          key: "name",
        },
        {
          title: "出货渠道",
          key: "name",
        },
        {
          title: "剩余库存",
          key: "name",
        },
        {
          title: "操作",
          slot: "action",
          key: "action",
          width: 200
        },
      ],
      tableData: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
      ],
    };
  },
  methods: {
    handleOutScore() {
      this.outStore.status = true;
    },
    deleteSumbit() {
      this.deleteModal.status = false;
    },
    openDeleteModel() {
      this.deleteModal.status = true;
    },
    changePage(page) {
      console.log(page);
    },
    editItem() {
      this.modalInfo.status = true;
    },
    addItem() {
      this.modalInfo.status = true;
    },
  },
};
</script>
<style>
.estoreManage__warpper {
}
.filter__box {
}
.page__tools {
  background: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>