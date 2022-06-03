<template>
  <div class="express__warpper">
    <div class="filter__box">
      渠道：
      <Select v-model="model1" style="width: 200px">
        <Option
          v-for="item in googsSourceOption"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      编号：
      <Input v-model="value" style="width: 200px" />
      名称：
      <Input v-model="value" style="width: 200px" />
      负责人：
      <Input v-model="value" style="width: 200px" />
      业务员：
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
        </template>
      </Table>
      <div class="page__tools">
        <Page @on-change="changePage" :total="total" show-total />
      </div>
    </div>
    <Modal
      v-model="modalInfo.status"
      title="编辑渠道信息"
      width="800"
      @on-ok="ok"
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <Form :label-width="120" style="padding: 30px 30px 0px 0">
        <FormItem label="渠道" prop="username">
          <Select v-model="model1" style="width: 100%">
            <Option
              v-for="item in googsSourceOption"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="编号" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="名称" prop="username">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="中文地址" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="坐标" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="渠道负责人" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="渠道负责人电话" prop="password">
          <Input v-model="modalInfo.data.username"></Input>
        </FormItem>
        <FormItem label="业务员" prop="password">
          <Select style="width: 100%" v-model="modalInfo.data.username">
            <Option
              v-for="item in expressOption"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
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
  name: "express",
  data() {
    return {
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
      expressOption: [
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
          title: "渠道",
          key: "name",
        },
        {
          title: "编号",
          key: "name",
        },
        {
          title: "名称",
          key: "name",
        },
        {
          title: "地址",
          key: "age",
        },
        {
          title: "负责人",
          key: "address",
        },
        {
          title: "联系电话",
          key: "address",
        },
        {
          title: "业务员",
          key: "address",
        },
        {
          title: "业务员电话",
          key: "address",
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
.express__warpper {
}
.filter__box {
}
.page__tools {
  background: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>