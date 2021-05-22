<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
    <h2 style="color: coral">Current User Data</h2>
    <xsl:apply-templates />
</body>
</html>
</xsl:template>

<xsl:template match="UserData">
    <p>
    <xsl:apply-templates select="fname" />
    <xsl:apply-templates select="lname" />
    <xsl:apply-templates select="RollNo" />
    <xsl:apply-templates select="email" />
    <xsl:apply-templates select="RegID" />
    <xsl:apply-templates select="Division" />
    </p>
</xsl:template>

<xsl:template match="fname">
First Name: <span >
<xsl:value-of select="." /></span>
<br />
</xsl:template>

<xsl:template match="lname">
Last Name: <span >
<xsl:value-of select="." /></span>
<br />
</xsl:template>

<xsl:template match="RollNo">
RollNo: <span >
<xsl:value-of select="." /></span>
<br />
</xsl:template>

<xsl:template match="email">
Email ID: <span>
<xsl:value-of select="." /></span>
<br />
</xsl:template>

<xsl:template match="RegID">
RegID: <span>
<xsl:value-of select="." /></span>
<br />
</xsl:template>

<xsl:template match="Division">
Division: <span>
<xsl:value-of select="." /></span>
<br />
</xsl:template>

</xsl:stylesheet>