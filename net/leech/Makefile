include $(TOPDIR)/rules.mk

PKG_NAME:=leech
PKG_VERSION:=1.0
PKG_RELEASE:=RA-MOD

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/leech
  TITLE:=leech PT RSS RA MOD
  CATEGORY:=Network
  SUBMENU:=File Transfer
  DEPENDS=+xsltproc +aria2 +wget
  PKGARCH:=all
endef

define Package/leech/description
  leech RA MOD For Chinese PT site
  Features:
  -  send to aria2 RPC directly
endef

define Build/Prepare
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/leech/install
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_DATA) ./files/RSS.config $(1)/etc/config/RSS
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/RSS.init $(1)/etc/init.d/RSS
	$(INSTALL_DIR) $(1)/etc/RSS
	$(INSTALL_DATA) ./files/feeds $(1)/etc/RSS/feeds
	$(INSTALL_DIR) $(1)/etc/RSS
	$(INSTALL_DATA) ./files/normal.xsl $(1)/etc/RSS/normal.xsl
	$(INSTALL_DIR) $(1)/etc/RSS
	$(INSTALL_DATA) ./files/alternate.xsl $(1)/etc/RSS/alternate.xsl
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) ./leech $(1)/usr/sbin/leech
endef

$(eval $(call BuildPackage,leech))
