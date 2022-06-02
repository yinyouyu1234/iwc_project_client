<template>
  <div class="goods__warpper">
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
          <Button style="margin-left: 10px" type="error" @click="openDeleteModel">删除</Button>
          <Button style="margin-left: 10px" type="primary" @click="editItem(row)"
            >编辑</Button>
          <Button style="margin-left: 10px" type="primary" @click="editItem(row)"
            >启用</Button>
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
          <Select v-model="model1" style="width:100%">
            <Option v-for="item in googsSourceOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="物品分类" prop="username">
          <Select v-model="model1" style="width:100%">
            <Option v-for="item in classificationOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="名称" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="收货单价" prop="password">
          <Input v-model="modalInfo.data.a"></Input>
        </FormItem>
        <FormItem label="出货单价" prop="password">
          <Input v-model="modalInfo.data.a"></Input>
        </FormItem>
        <FormItem label="出货渠道" prop="password">
          <Input v-model="modalInfo.data.b"></Input>
        </FormItem>
        <FormItem label="结算系数" prop="password">
          <Input v-model="modalInfo.data.b"></Input>
        </FormItem>
        <FormItem label="黑料" prop="password">
          <Checkbox v-model="single" />
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="deleteModal.status" width="360">
      <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>提示</span>
      </p>
      <div style="text-align:center">
        <p>是否确认删除</p>
      </div>
      <div slot="footer">
          <Button type="error" size="large" long  @click="deleteSumbit">删除</Button>
      </div>
  </Modal>
  </div>
</template>
<script>
export default {
  name: "goods",
  data() {
    return {
      total: 100,
      googsSourceOption: [
        {
          label: '驿站',
          value: 0
        },
        {
          label: '代理商',
          value: 1
        }
      ],
      classificationOption: [
        {
          label: '织物',
          value: 0
        },
        {
          label: '包',
          value: 1
        },
        {
          label: '鞋',
          value: 2
        }
      ],
      deleteModal: {
        status: false,
        data: {}
      },
      goodsOption: [
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
          title: "代理商",
          key: "name",
        },
        {
          title: "物品分类",
          key: "name",
        },
        {
          title: "名称",
          key: "name",
        },
        {
          title: "收货单价",
          key: "address",
        },
        {
          title: "出货单价",
          key: "address",
        },
        {
          title: "出货渠道",
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
          width: 300
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
.goods__warpper {
}
.filter__box {
}
.page__tools {
  background: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>