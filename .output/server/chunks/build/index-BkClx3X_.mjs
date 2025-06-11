import { d as defineStore, a as axiosServices } from './server.mjs';

const useInvoicestore = defineStore({
  id: "invoices",
  state: () => ({
    invoice: [],
    invoiceContent: 1,
    invoiceSearch: ""
  }),
  getters: {
    grandTotal: () => (invoice) => {
      var _a;
      const subtotal = ((_a = invoice.orders) != null ? _a : []).reduce((sum, order) => {
        var _a2, _b;
        return sum + ((_a2 = order.unitPrice) != null ? _a2 : 0) * ((_b = order.units) != null ? _b : 0);
      }, 0);
      const vatRate = 0.1;
      const vat = subtotal * vatRate;
      return subtotal + vat;
    }
  },
  actions: {
    async fetchinvoice() {
      try {
        const response = await axiosServices.get("/api/data/invoices/invoiceData");
        this.invoice = response.data;
      } catch (error) {
        console.error(error);
        alert("Failed to fetch invoices");
      }
    },
    async addInvoice(invoice) {
      try {
        const response = await axiosServices.post("/api/data/invoices/invoiceData", invoice);
        this.invoice.push(response.data);
        return response.data;
      } catch (error) {
        console.error("Error adding invoice:", error);
      }
    },
    async updateInvoice(updatedInvoice) {
      try {
        const response = await axiosServices.put(
          `/api/data/invoices/invoiceData/${updatedInvoice.id}`,
          updatedInvoice
        );
        console.log("Response from update:", response);
        const index = this.invoice.findIndex((inv) => inv.id === updatedInvoice.id);
        if (index !== -1) {
          this.invoice[index] = response.data;
        }
        return response.data;
      } catch (error) {
        console.error("Error updating invoice:", error);
      }
    },
    deleteinvoice(itemID) {
      this.invoice = this.invoice.filter((invoice) => invoice.id !== itemID);
    }
  }
});

export { useInvoicestore as u };
//# sourceMappingURL=index-BkClx3X_.mjs.map
