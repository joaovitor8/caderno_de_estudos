namespace EX004
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnok = new System.Windows.Forms.Button();
            this.txttxt = new System.Windows.Forms.Label();
            this.txtnum = new System.Windows.Forms.TextBox();
            this.lblmsg1 = new System.Windows.Forms.Label();
            this.lblmsg2 = new System.Windows.Forms.Label();
            this.lblmsg3 = new System.Windows.Forms.Label();
            this.resultado = new System.Windows.Forms.Panel();
            this.resultado.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnok
            // 
            this.btnok.Location = new System.Drawing.Point(423, 55);
            this.btnok.Name = "btnok";
            this.btnok.Size = new System.Drawing.Size(75, 39);
            this.btnok.TabIndex = 0;
            this.btnok.Text = "OK";
            this.btnok.UseVisualStyleBackColor = true;
            this.btnok.Click += new System.EventHandler(this.btnok_Click);
            // 
            // txttxt
            // 
            this.txttxt.AutoSize = true;
            this.txttxt.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txttxt.Location = new System.Drawing.Point(57, 59);
            this.txttxt.Name = "txttxt";
            this.txttxt.Size = new System.Drawing.Size(212, 25);
            this.txttxt.TabIndex = 1;
            this.txttxt.Text = "Digite um número real: ";
            // 
            // txtnum
            // 
            this.txtnum.Location = new System.Drawing.Point(302, 59);
            this.txtnum.Multiline = true;
            this.txtnum.Name = "txtnum";
            this.txtnum.Size = new System.Drawing.Size(66, 25);
            this.txtnum.TabIndex = 2;
            // 
            // lblmsg1
            // 
            this.lblmsg1.AutoSize = true;
            this.lblmsg1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblmsg1.Location = new System.Drawing.Point(12, 30);
            this.lblmsg1.Name = "lblmsg1";
            this.lblmsg1.Size = new System.Drawing.Size(60, 24);
            this.lblmsg1.TabIndex = 3;
            this.lblmsg1.Text = "label2";
            // 
            // lblmsg2
            // 
            this.lblmsg2.AutoSize = true;
            this.lblmsg2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblmsg2.Location = new System.Drawing.Point(12, 73);
            this.lblmsg2.Name = "lblmsg2";
            this.lblmsg2.Size = new System.Drawing.Size(60, 24);
            this.lblmsg2.TabIndex = 4;
            this.lblmsg2.Text = "label3";
            // 
            // lblmsg3
            // 
            this.lblmsg3.AutoSize = true;
            this.lblmsg3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblmsg3.Location = new System.Drawing.Point(12, 121);
            this.lblmsg3.Name = "lblmsg3";
            this.lblmsg3.Size = new System.Drawing.Size(60, 24);
            this.lblmsg3.TabIndex = 5;
            this.lblmsg3.Text = "label4";
            // 
            // resultado
            // 
            this.resultado.Controls.Add(this.lblmsg2);
            this.resultado.Controls.Add(this.lblmsg3);
            this.resultado.Controls.Add(this.lblmsg1);
            this.resultado.Location = new System.Drawing.Point(8, 100);
            this.resultado.Name = "resultado";
            this.resultado.Size = new System.Drawing.Size(505, 221);
            this.resultado.TabIndex = 6;
            this.resultado.Visible = false;
            // 
            // Form1
            // 
            this.AcceptButton = this.btnok;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(529, 450);
            this.Controls.Add(this.resultado);
            this.Controls.Add(this.txtnum);
            this.Controls.Add(this.txttxt);
            this.Controls.Add(this.btnok);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.resultado.ResumeLayout(false);
            this.resultado.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnok;
        private System.Windows.Forms.Label txttxt;
        private System.Windows.Forms.TextBox txtnum;
        private System.Windows.Forms.Label lblmsg1;
        private System.Windows.Forms.Label lblmsg2;
        private System.Windows.Forms.Label lblmsg3;
        private System.Windows.Forms.Panel resultado;
    }
}

