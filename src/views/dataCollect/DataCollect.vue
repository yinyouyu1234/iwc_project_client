<template>
  <div class="dataCollect__warpper">
    <div class="filter__box">
      出货渠道：
      <Input v-model="value" style="width: 200px" />
      <Button style="margin-left: 10px">搜索</Button>
      <Button style="margin-left: 10px" type="primary" @click="addItem"
        >新增</Button
      >
    </div>
    <div class="view">
      <Table :columns="columns" :data="tableData">
        <template slot-scope="{ row }" slot="action">
          <Button
            style="margin-left: 10px"
            type="error"
            @click="openDeleteModel"
            >删除</Button
          >
          <Button
            style="margin-left: 10px"
            type="primary"
            @click="editItem(row)"
            >编辑</Button
          >
          <Button
            style="margin-left: 10px"
            type="primary"
            @click="editItem(row)"
            >已支付</Button
          >
          <Button
            style="margin-left: 10px"
            type="primary"
            @click="getDetailInfo(row)"
            >查看</Button
          >
        </template>
      </Table>
      <div class="page__tools">
        <Page @on-change="changePage" :total="total" show-total />
      </div>
    </div>
    <Modal
      v-model="modalInfo.status"
      title="编辑物品信息"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <FormItem label="物品来源分类" prop="username">
          <Select v-model="model1" style="width: 100%">
            <Option
              v-for="item in googsSourceOption"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
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
    <Modal
      v-model="modalDetailInfo.status"
      title="查看详情"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <FormItem label="物品来源分类" prop="username">
          驿站
        </FormItem>
        <Divider orientation="left">织物</Divider>
        <Table :columns="fabriCcolumns" :data="tableData"></Table>
        <div class="totol__bar">
          <span>重量合计：xxx</span>
          <span>结算合计：xxxx</span>
          <span>利润合计：xxxx</span>
          <span>分项利润比：xxx</span>
        </div>
        <Divider orientation="left">包</Divider>
        <Table :columns="fabriCcolumns" :data="tableData"></Table>
        <div class="totol__bar">
          <span>重量合计：xxx</span>
          <span>结算合计：xxxx</span>
          <span>利润合计：xxxx</span>
          <span>分项利润比：xxx</span>
        </div>
        <Divider orientation="left">鞋</Divider>
        <Table :columns="fabriCcolumns" :data="tableData"></Table>
        <div class="totol__bar">
          <span>重量合计：xxx</span>
          <span>结算合计：xxxx</span>
          <span>利润合计：xxxx</span>
          <span>分项利润比：xxx</span>
        </div>

      <Divider orientation="left">本单汇总</Divider>
        <div class="totol__bar">
          <span>总黑料率：xxx</span>
          <span>结算合计：xxxx</span>
          <span>利润合计：xxxx</span>
          <span>利润率：xxx</span>
        </div>
      </Form>
    </Modal>
    <Modal v-model="deleteModal.status" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>提示</span>
      </p>
      <div style="text-align: center">
        <p>是否确认删除</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteSumbit"
          >删除</Button
        >
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "dataCollect",
  data() {
    return {
      total: 100,
      modalDetailInfo: {
        status: true
      },
      googsSourceOption: [
        {
          label: "驿站",
          value: 0,
        },
        {
          label: "代理商",
          value: 1,
        },
      ],
      classificationOption: [
        {
          label: "织物",
          value: 0,
        },
        {
          label: "包",
          value: 1,
        },
        {
          label: "鞋",
          value: 2,
        },
      ],
      deleteModal: {
        status: false,
        data: {},
      },
      dataCollectOption: [
        {
          value: "张三",
          label: "张三",
        },
      ],
      modalInfo: {
        status: false,
        data: {},
      },
      fabriCcolumns: [
        {
          title: "名称",
          key: "name",
        },
        {
          title: "重量",
          key: "name",
        },
        {
          title: "结算价",
          key: "name",
        },
        {
          title: "售价",
          key: "name",
        },
        {
          title: "分项比例",
          key: "name",
        },
        {
          title: "分项利润",
          key: "name",
        }
      ],
      columns: [
        {
          title: "渠道",
          key: "name",
        },
        {
          title: "代理商",
          key: "name",
        },
        {
          title: "时间",
          key: "name",
        },
        {
          title: "重量（KG）",
          key: "address",
        },
        {
          title: "总黑料率（%）",
          key: "address",
        },
        {   
          title: "毛利润(￥)",
          key: "address",
        },
        {   
          title: "利润率(%)",
          key: "address",
        },
        {
          title: "状态",
          key: "address",
        },
        {
          title: "操作",
          slot: "action",
          key: "action",
          width: 350,
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
    getDetailInfo () {
      this.modalDetailInfo.status = true;
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
.dataCollect__warpper {
}
.filter__box {
}
.page__tools {
  background: #fff;
  padding: 20px 0;
  text-align: center;
}
.totol__bar {
  padding: 10px;
}
.totol__bar span {
  padding-right: 10px;
}
</style>