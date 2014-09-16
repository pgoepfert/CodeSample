<%@ Page Title="" Language="C#" MasterPageFile="~/Common/MasterPages/Site.Master" AutoEventWireup="true" CodeBehind="ContactUs.aspx.cs" Inherits="ScottsdaleModelFlyers.ContactUs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<div class="content">

		<h1>Contact Us</h1>
		<asp:Panel runat="server" ID="pnl_form" Visible="True">
			<asp:ValidationSummary runat="server" ID="valSummary" DisplayMode="BulletList" CssClass="req" />
			<div class="contactUsFormLft">
				<asp:Label AssociatedControlID="txtFirstName" class="contactUsFormLbl" runat="server">First Name</asp:Label>
				<span class="req">*</span>
			</div>
			<div class="contactUsFormRt">
				<asp:TextBox ID="txtFirstName" CssClass="contactUsFormTxt" runat="server" CausesValidation="True" />
				<asp:RequiredFieldValidator runat="server" ID="reqvalFirstName" ControlToValidate="txtFirstName" ErrorMessage="Please enter your first name" Display="None" />
			</div>
			<div class="contactUsFormLft">
				<asp:Label AssociatedControlID="txtLastName" CssClass="contactUsFormLbl" runat="server">Last Name</asp:Label>
				<span class="req">*</span>
			</div>
			<div class="contactUsFormRt">
				<asp:TextBox ID="txtLastName" class="contactUsFormTxt" runat="server" CssClass="contactUsFormTxt" CausesValidation="True" />
				<asp:RequiredFieldValidator runat="server" ID="reqValLastName" Display="None" ErrorMessage="Please enter your last name" ControlToValidate="txtLastName" />
			</div>
			<div class="contactUsFormLft">
				<asp:Label runat="server" ID="lblEmail" AssociatedControlID="txtEmail" CssClass="contactUsFormLbl">Email Address</asp:Label>
				<span class="req">*</span>
			</div>
			<div class="contactUsFormRt">
				<asp:TextBox ID="txtEmail" class="contactUsFormTxt" runat="server" CausesValidation="True" />
				<asp:RequiredFieldValidator ID="reqval_email" runat="server" ControlToValidate="txtEmail" ErrorMessage="Please enter a valid Email Address - user@domain.com"
					Display="None" /><br />
				<asp:RegularExpressionValidator ID="regval_email" runat="server" ControlToValidate="txtEmail" ErrorMessage="Invalid Email" ValidationExpression="^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$"
					Display="None" />
			</div>
			<div class="contactUsFormLft">
				<asp:Label AssociatedControlID="txtMessage" CssClass="contactUsFormLbl" ID="lbltxtMessage" runat="server">Message</asp:Label>
				<span class="req">*</span>
			</div>
			<div class="contactUsFormRt">
				<asp:TextBox runat="server" ID="txtMessage" CssClass="contactUsFormTxtBox" TextMode="MultiLine" Columns="85" Rows="4" CausesValidation="True" />
			</div>
			<div class="contactUsFormRt">
				<section>
					<asp:Button type="submit" Text="Submit" runat="server" ID="btnSubmit" UseSubmitBehavior="True" ToolTip="Submit" OnClick="btnSubmit_Click" />
				</section>
			</div>
		</asp:Panel>
		<asp:Panel runat="server" ID="pnl_thankyou" Visible="False">
			<p>Thank you for your contacting us.</p>
		</asp:Panel>
	</div>
</asp:Content>
