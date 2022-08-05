using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EX004
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnok_Click(object sender, EventArgs e)
        {
            float num = 0;
            float.TryParse(txtnum.Text, out num);

            int n1 = (int)num;
            int n2 = Convert.ToInt16(num);

            lblmsg1.Text = $"Voce digitou o valor {num:N}";
            lblmsg2.Text = $"A parte inteira é {n1:0}";
            lblmsg3.Text = $"Arredontando, temos {n2:0}";

            resultado.Visible = true;
        }
    }
}
