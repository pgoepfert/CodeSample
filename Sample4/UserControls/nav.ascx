<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="nav.ascx.cs" Inherits="ScottsdaleModelFlyers.UserControls.nav" %>
<nav >
	<ul id="MenuBar1" class="MenuBarHorizontal">
		<li><a href="/Default.aspx" title="Home">Home</a></li>
		<li><a href="/docs/SMF_APPLICATION.pdf" target="_blank" title="Membership">Membership</a></li>
		<li><a class="MenuBarItemSubmenu" href="/historybylaws.aspx" title="History and ByLaws">History &amp; ByLaws</a>
			<ul class="MenuBarItemSubmenu">
				<li><a href="/docs/SMF_BYLAW.pdf" target="_blank" title="ByLaws">ByLaws</a></li>
				<li><a href="/docs/SMF_Site_Rules.pdf" target="_blank" title="Site Rules">Site Rules</a></li>
			</ul>
		</li>
		<li><a href="/ClubOfficers.aspx" title="Club Officers">Club Officers</a></li>
		<li><a href="/ContactUs.aspx" title="Contact Us">Contact Us</a></li>
		<li><a href="http://www.scottsdalecc.edu/about-scottsdale/scc-weather" target="_blank" title="Weather">Weather</a></li>
	</ul>
</nav>
