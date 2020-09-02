(this.webpackJsonp = this.webpackJsonp || []).push([[27], {
  "/C7jNg4H": function(e, t, n) {
      "use strict";
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n.n(r)
        , i = n("2RvoYAEM")
        , c = n("p8P8vxSn")
        , l = n("GESwhXbR")
        , s = n("dmV+3K1m")
        , u = n("iv0M010j")
        , d = n.n(u)
        , p = n("1FP7w987")
        , f = n("MxIDUOBp")
        , m = function(e) {
          return e + ".header.config"
      }
        , b = function(e) {
          var t;
          return function(e) {
              var t = s.f.get(m(e));
              return (null == t ? void 0 : t.version) !== s.a.version
          }(e) && g(e, s.a.columns),
          (null === (t = s.f.get(m(e))) || void 0 === t ? void 0 : t.columns) || s.a.columns
      }
        , g = function(e, t) {
          var n = m(e)
            , a = {
              version: s.a.version,
              columns: t
          };
          s.f.set(n, a)
      }
        , v = Object(i.SortableHandle)(function() {
          return o.a.createElement(l.Icon, {
              type: "menu",
              className: d.a.handler
          })
      })
        , h = Object(i.SortableElement)(function(e) {
          var t = e.column
            , n = e.onColumnToggle
            , a = Object(p.a)(t);
          return a ? o.a.createElement(c.MenuItem, {
              className: d.a["column-item"] + " " + (t.keepVisible ? d.a.disabled : ""),
              onClick: function() {
                  t.keepVisible || n(t, !t.visible)
              }
          }, o.a.createElement(v, null), o.a.createElement("div", {
              className: "" + d.a.inner
          }, o.a.createElement("span", {
              className: d.a.label
          }, a), t.visible && o.a.createElement(l.Icon, {
              type: "tick"
          }))) : o.a.createElement("span", null)
      })
        , O = Object(i.SortableContainer)(function(e) {
          var t = e.columns
            , n = e.onColumnToggle
            , a = t.map(function(e, t) {
              return o.a.createElement(h, {
                  key: "" + e.payload.name,
                  index: t,
                  column: e,
                  onColumnToggle: n,
                  disabled: e.keepVisible
              })
          });
          return o.a.createElement("ul", null, a)
      })
        , j = function(e) {
          var t = Object(r.useRef)(null)
            , n = o.a.createElement(c.Menu, {
              ref: t
          }, o.a.createElement(O, {
              columns: e.columns,
              useDragHandle: !0,
              helperClass: d.a.helper,
              onSortEnd: function(t) {
                  var n = t.oldIndex
                    , r = t.newIndex;
                  if (n !== r) {
                      var o = Object(a.__spread)(e.columns)
                        , i = o[n];
                      o.splice(n, 1),
                      o.splice(r, 0, i),
                      e.onColumnSort(o)
                  }
              },
              lockAxis: "y",
              lockToContainerEdges: !0,
              onColumnToggle: e.onColumnToggle
          }), o.a.createElement(c.Separator, null), o.a.createElement(c.MenuItem, {
              key: "outline-row-index"
          }, o.a.createElement(f.a, {
              _projectId: e.project._id
          })));
          return o.a.createElement(c.Dropdown, {
              content: n,
              persistence: !0,
              placement: "bottom-start"
          }, o.a.createElement("div", {
              className: d.a["head-row-index"]
          }, o.a.createElement(l.Icon, {
              type: "gear"
          })))
      };
      n.d(t, "b", function() {
          return b
      }),
      n.d(t, "c", function() {
          return g
      }),
      n.d(t, "a", function() {
          return j
      })
  },
  "/LDIkT/T": function(e, t, n) {
      e.exports = {
          "search-input-section": "search-input-section__2pCg",
          "search-input": "search-input__3bGO",
          "search-prefix": "search-prefix__2cQJ"
      }
  },
  "/WVshr7z": function(e, t, n) {
      e.exports = n.p + "images/overdue.12964348.png"
  },
  "06EqRv5a": function(e, t, n) {
      e.exports = n.p + "images/loose.1f8eccc8.svg"
  },
  "0Ww+EVLF": function(e, t, n) {
      e.exports = {
          "gantt-view": "gantt-view__1-l-",
          "gantt-view-wrap": "gantt-view-wrap__1Pca",
          "gantt-view-tips": "gantt-view-tips__3YJ6",
          "gantt-view-placeholder-wrap": "gantt-view-placeholder-wrap__1foW",
          "gantt-view-placeholder": "gantt-view-placeholder__13uX"
      }
  },
  "162oLhLu": function(e, t, n) {
      e.exports = {
          "baseline-bar": "baseline-bar__379w"
      }
  },
  "1BXXRVTn": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return u
      });
      var a = n("cDcdfi41")
        , r = n.n(a)
        , o = n("GESwhXbR")
        , i = n("O94r4YFm")
        , c = n.n(i)
        , l = n("glG/mlnF")
        , s = n.n(l)
        , u = function(e) {
          var t = e.options
            , n = e.value
            , a = e.onChange
            , i = d(n);
          return r.a.createElement(o.Select, {
              popupClassName: s.a.dropdown,
              mode: "single",
              trigger: i,
              useDetailValue: !0,
              value: n,
              onChange: a,
              dataSource: t
          })
      }
        , d = function(e) {
          return r.a.createElement("div", {
              className: c()(s.a["group-by-select"])
          }, r.a.createElement("span", {
              className: s.a["selected-label"]
          }, function(e) {
              return e ? e.label : ""
          }(e)), r.a.createElement(o.Icon, {
              type: "chevron-down-s"
          }))
      }
  },
  "1FP7w987": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return o
      });
      var a = n("cP28Uy3B")
        , r = n.n(a)
        , o = function(e) {
          switch (e.payload.name) {
          case "content":
              return r.a.get("gantt.app.outline.task.content");
          case "executor":
              return r.a.get("gantt.app.outline.task.executor");
          case "startDate":
              return r.a.get("gantt.app.outline.task.startDate");
          case "dueDate":
              return r.a.get("gantt.app.outline.task.dueDate");
          case "leadDependency":
              return r.a.get("gantt.app.outline.task.leadDependency");
          case "effort":
              return r.a.get("gantt.app.outline.task.effort");
          default:
              return e.payload.name
          }
      }
  },
  "1NS6HBRd": function(e, t, n) {
      e.exports = {
          "task-bar": "task-bar__2VdE",
          bar: "bar__BPW0",
          "dependency-handle": "dependency-handle__1Idl",
          inner: "inner__7vSG",
          right: "right__1vCc",
          loose: "loose__2lUE",
          done: "done__JsMI",
          outer: "outer__3o8A",
          overdue: "overdue__1gSA",
          "invalid-date-range": "invalid-date-range__sobT",
          "resize-bg": "resize-bg__2eMo",
          compact: "compact__3dEj"
      }
  },
  "257OH2E0": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return p
      }),
      n.d(t, "b", function() {
          return f
      }),
      n.d(t, "c", function() {
          return m
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("cP28Uy3B")
        , i = n.n(o)
        , c = n("bvmrLhnu")
        , l = n("faye7nRW")
        , s = n("kEFXGxyL")
        , u = n("dmV+3K1m")
        , d = function(e) {
          return e + ".group.by.select"
      }
        , p = function(e) {
          return u.f.get(d(e))
      }
        , f = function(e, t) {
          u.f.set(d(e), t)
      }
        , m = function(e, t, n) {
          var o = Object(a.__read)(Object(r.useState)([]), 2)
            , u = o[0]
            , d = o[1]
            , p = Object(a.__read)(Object(r.useState)(void 0), 2)
            , f = p[0]
            , m = p[1]
            , b = Object(a.__read)(Object(r.useMemo)(function() {
              return e ? [e._id, Object(c.isNormal)(e), Object(c.isScrum)(e), Object(c.isTaskflow)(e), Object(c.hasScrumAppEnabled)(e), Object(c.isAppEnabled)(e, "tasklist")] : [void 0, !1, !1, !1, !1, !1]
          }, [e]), 6)
            , g = b[0]
            , v = b[1]
            , h = b[2]
            , O = b[3]
            , j = b[4]
            , y = b[5]
            , k = Object(r.useCallback)(function(e, t) {
              m(e),
              n({
                  groupBySelectOption: e
              }, t)
          }, [n]);
          return Object(r.useEffect)(function() {
              if (g) {
                  var e = [];
                  v ? e.push({
                      value: "_tasklistId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("tasklist")),
                      payload: void 0
                  }, {
                      value: "_stageId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("table.task.stage")),
                      payload: void 0
                  }) : h ? j ? e.push({
                      value: "_sprintId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("sprint")),
                      payload: void 0
                  }) : e.push({
                      value: "_tasklistId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("tasklist")),
                      payload: void 0
                  }) : O && (j && e.push({
                      value: "_sprintId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("sprint")),
                      payload: void 0
                  }),
                  y && e.push({
                      value: "_tasklistId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("tasklist")),
                      payload: void 0
                  })),
                  e.push({
                      value: "_executorId",
                      label: i.a.get("gantt.groupBy.label", i.a.get("executor")),
                      payload: void 0
                  });
                  var n = t.groupBySelectOption
                    , a = n ? e.find(function(e) {
                      return n.value === e.value
                  }) : null;
                  a && e.find(function(e) {
                      return (null == a ? void 0 : a.value) === e.value
                  }) || (a = e[0]),
                  Object(l.unstable_batchedUpdates)(function() {
                      k(a, !0),
                      d(e)
                  })
              }
          }, [g, v, h, O, j, y, k]),
          {
              options: u,
              value: f,
              onChange: Object(r.useCallback)(function(e) {
                  k(e),
                  s.gta.event({
                      action: "switch group",
                      page: "gantt page",
                      type: e.value
                  })
              }, [k])
          }
      }
  },
  "2a8VZ508": function(e, t, n) {
      e.exports = {
          "task-trace": "task-trace__31JP",
          text: "text__Ump6"
      }
  },
  "2jFm5lUY": function(e, t, n) {
      e.exports = {
          "body-row-handle": "body-row-handle__3YUe",
          private: "private__3Pzf",
          clickable: "clickable__1NNN"
      }
  },
  "2yzd6eos": function(e, t, n) {
      e.exports = {
          "task-filter-selector-content": "task-filter-selector-content__Bkiz"
      }
  },
  "4bGseOz5": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return l
      });
      var a = n("cDcdfi41")
        , r = n("nnRTjib/")
        , o = n.n(r)
        , i = n("HzCjrc5d")
        , c = n("/GeFQFAU")
        , l = function() {
          var e = Object(i.q)()
            , t = e.searchersFilter$
            , n = e.customView$
            , r = Object(c.c)(t)
            , l = Object(c.c)(n);
          return Object(a.useMemo)(function() {
              return l ? !o()(r, l.searchersFilter) : r.hasFilters
          }, [r, l])
      }
  },
  "4dGxFK86": function(e, t, n) {
      e.exports = {
          label: "label__fdzT",
          done: "done__2FN0",
          invisible: "invisible__1e9Z",
          loose: "loose__1f2z"
      }
  },
  "4kGQRQn1": function(e, t, n) {
      e.exports = {
          "baseline-filter": "baseline-filter__1W9i",
          "baseline-wrap": "baseline-wrap__Bz9c",
          "baseline-tips": "baseline-tips__2RuF",
          "baseline-placeholder-wrap": "baseline-placeholder-wrap__yvjg",
          "baseline-placeholder": "baseline-placeholder__1Ohi"
      }
  },
  "6ACC1KoE": function(e, t, n) {
      e.exports = {
          "move-to-today": "move-to-today__uxgP",
          scrolling: "scrolling__3E94"
      }
  },
  "6Ukl4YYB": function(e, t, n) {
      e.exports = {
          "searches-list": "searches-list__3j-1"
      }
  },
  "7e6nhGRf": function(e, t, n) {
      e.exports = {
          "time-axis-item": "time-axis-item__2yBj",
          major: "major__2rd6",
          label: "label__RLd1",
          minor: "minor__11Xd",
          weekends: "weekends__1EmY",
          highlight: "highlight__3NdW",
          "highlight-bg": "highlight-bg__1mPp"
      }
  },
  "7tIMhIWn": function(e, t, n) {
      e.exports = n.p + "images/compact.227c5802.svg"
  },
  "9P86uO+r": function(e, t, n) {
      "use strict";
      n("D57KnuyU"),
      n("cDcdfi41"),
      n("dmV+3K1m")
  },
  "9RKihit3": function(e, t, n) {
      e.exports = n.p + "images/auto-scheduling-guild.cf663c09.gif"
  },
  "9nsxlSTA": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("ziER8GQF")
        , r = n.n(a)
        , o = n("5JeMfCdX")
        , i = n.n(o)
        , c = new r.a({
          id: "gantt-view-placeholder",
          use: "gantt-view-placeholder-usage",
          viewBox: "0 0 62 53",
          content: '<symbol viewBox="0 0 62 53" id="gantt-view-placeholder"><defs><linearGradient id="gantt-view-placeholder_a" x1="-26.076%" x2="172.412%" y1="12.217%" y2="94.04%"><stop offset="0%" stop-color="#F7F7F7" /><stop offset="100%" stop-color="#E5E5E5" /></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#gantt-view-placeholder_a)" stroke="#CCCCCC" d="M60.17 62H11.83c-.81 0-1.498-.574-1.62-1.35L6.02 33.826c-.15-.96.617-1.825 1.618-1.825h56.726c1.001 0 1.768.865 1.618 1.825L61.79 60.651c-.12.775-.809 1.349-1.618 1.349h0z" transform="translate(-5 -10)" /><path fill="#CCCCCC" fill-rule="nonzero" d="M7.5 5.793l3.257 3.257-.707.707L6.793 6.5l.707-.707zm47.55 0l.707.707L52.5 9.757l-.707-.707 3.257-3.257zM32 0v3h-1V0h1z" /></g></symbol>'
      });
      i.a.add(c);
      t.default = c
  },
  A8C0ygCh: function(e, t, n) {
      e.exports = {
          "row-index-switch": "row-index-switch__29uu",
          "row-index-label": "row-index-label__2te9"
      }
  },
  AlYVqoR6: function(e, t, n) {
      e.exports = {
          popup: "popup__1PLk",
          icon: "icon__1Hcn",
          tip: "tip__1__U",
          image: "image__1ev6"
      }
  },
  BkDArZAd: function(e, t, n) {
      e.exports = n.p + "images/compact-active.98ee4521.svg"
  },
  Bqj0TC0x: function(e, t, n) {
      e.exports = {
          "scroll-indicator": "scroll-indicator__3aij",
          scrolling: "scrolling__1B1k"
      }
  },
  CkVoujSO: function(e, t, n) {
      e.exports = {
          head: "head__1FJ4",
          right: "right__3gtp",
          "menu-item": "menu-item__1vew",
          "mode-card-container": "mode-card-container__DVhz",
          "mode-card": "mode-card__3teN",
          "image-wrap": "image-wrap__3BC8",
          preview: "preview__1-ux",
          footer: "footer__2DWf",
          name: "name__1c0J",
          des: "des__2M_b",
          selected: "selected__teC8",
          "button-wrap": "button-wrap__b1pN"
      }
  },
  CybbHIxh: function(e, t, n) {
      e.exports = {
          "task-dependency-line": "task-dependency-line__14K2",
          line: "line__2Kq9",
          arrow: "arrow__1xeL",
          disabled: "disabled__3kz5",
          invalid: "invalid__1oNw",
          critical: "critical__3_Rj"
      }
  },
  "FZi6/fIB": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return l
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("CB9K9K++")
        , i = n("s0r7VfKc")
        , c = n("L+5l05K3")
        , l = function(e) {
          var t = Object(a.__read)(Object(r.useState)(void 0), 2)
            , n = t[0]
            , l = t[1];
          return Object(r.useEffect)(function() {
              var t = o.Observable.combineLatest(i.default.getScenarioFieldConfigs(e, "task"), i.default.fetch.getAppScenarioFieldConfigs(e).map(c.b)).subscribe(function(e) {
                  var t = Object(a.__read)(e, 2)
                    , n = t[0]
                    , r = t[1];
                  l({
                      custom: n.reduce(function(e, t) {
                          return e.concat(t.scenariofields)
                      }, []).filter(function(e) {
                          return "customfield" === e.fieldType
                      }),
                      app: r.reduce(function(e, t) {
                          return e.concat(t.scenariofields)
                      }, [])
                  })
              });
              return function() {
                  return t.unsubscribe()
              }
          }, [e]),
          Object(r.useMemo)(function() {
              if (n) {
                  var e = n.custom.concat(n.app);
                  return new Map(e.map(function(e) {
                      var t, n;
                      return [e._customfieldId, {
                          name: e._customfieldId,
                          isScenarioField: !0,
                          scenarioField: e,
                          customField: null !== (t = e.customfield) && void 0 !== t ? t : void 0,
                          customFieldEntity: null !== (n = e.customfieldentity) && void 0 !== n ? n : void 0
                      }]
                  }))
              }
          }, [n])
      }
  },
  FrKuMCqy: function(e, t, n) {
      e.exports = {
          "baseline-item": "baseline-item__2bHE",
          more: "more__VVOe",
          info: "info__2Kcp",
          title: "title__2GVS",
          time: "time__2QFj",
          "menu-view": "menu-view__1JwV",
          item: "item__2xvn",
          "menu-view-delete": "menu-view-delete__2UrD",
          "delete-button": "delete-button__2M0U"
      }
  },
  GLdMNDVn: function(e, t, n) {
      e.exports = {
          mask: "mask__3CAH",
          "drag-indicator": "drag-indicator__1C3_"
      }
  },
  GqmZah18: function(e, t, n) {
      e.exports = {
          "task-custom-field": "task-custom-field__Qp0d",
          "task-custom-field__inner": "task-custom-field__inner__2px9"
      }
  },
  HElSQS6v: function(e, t, n) {
      e.exports = n.p + "images/critical-path-guild.4846b1ff.gif"
  },
  IMo0WtFo: function(e, t, n) {
      e.exports = n.p + "images/over-trial-tip.248347b5.png"
  },
  JHERnZ6M: function(e, t, n) {
      e.exports = {
          "baseline-tip": "baseline-tip__23_X"
      }
  },
  Jeu4Gpbg: function(e, t, n) {
      e.exports = n.p + "images/father.48b17d52.png"
  },
  "LCxrq/2D": function(e, t, n) {
      e.exports = {
          "task-filter-trigger": "task-filter-trigger__1JhS",
          active: "active__2Ay6",
          badge: "badge__Y2AB",
          text: "text__1v1B"
      }
  },
  LjwqhMwd: function(e, t, n) {
      e.exports = {
          "move-to-last-task": "move-to-last-task__3iV_",
          scrolling: "scrolling__2_mP"
      }
  },
  MRWt5Q5L: function(e, t, n) {
      e.exports = n.p + "images/done.04559766.png"
  },
  MxIDUOBp: function(e, t, n) {
      "use strict";
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n.n(r)
        , i = n("GESwhXbR")
        , c = n("p8P8vxSn")
        , l = n("cP28Uy3B")
        , s = n.n(l)
        , u = n("/GeFQFAU")
        , d = n("HzCjrc5d")
        , p = n("7QVRqOtl")
        , f = n("dmV+3K1m")
        , m = n("kEFXGxyL")
        , b = n("A8C0ygCh")
        , g = n.n(b)
        , v = function(e) {
          return e + ".outline.rowIndex"
      }
        , h = function(e) {
          return f.f.get(e) || p.b.on
      }
        , O = function(e) {
          return e.visible ? o.a.createElement(c.Tooltip, {
              title: s.a.get("gantt.app.outline.row.index.switch.tooltip")
          }, o.a.createElement(i.Icon, {
              type: "info-o"
          })) : null
      }
        , j = function(e) {
          var t = Object(d.q)().outlineRowIndex$
            , n = Object(u.c)(t)
            , r = v(e._projectId);
          return o.a.createElement("div", {
              className: g.a["row-index-switch"]
          }, o.a.createElement("div", {
              className: g.a["row-index-label"]
          }, s.a.get("gantt.app.outline.row.index.switch.label"), o.a.createElement(O, {
              visible: !1
          })), o.a.createElement(i.Switch, {
              checked: n.switch === p.b.on,
              onChange: function(e) {
                  t.next(Object(a.__assign)(Object(a.__assign)({}, t.value), {
                      switch: e ? p.b.on : p.b.off
                  })),
                  function(e, t) {
                      var n = t ? p.b.on : p.b.off;
                      f.f.set(e, n),
                      m.gta.event({
                          action: "switch task number",
                          page: "gantt page",
                          category: n
                      })
                  }(r, e)
              }
          }))
      };
      n.d(t, "c", function() {
          return v
      }),
      n.d(t, "b", function() {
          return h
      }),
      n.d(t, "a", function() {
          return j
      })
  },
  NAwW6wWx: function(e, t, n) {
      e.exports = {
          "gantt-view-item": "gantt-view-item__1Ow9",
          active: "active__3ln1",
          icon: "icon__3pNB",
          title: "title__1J1k",
          badge: "badge__2dOD",
          more: "more__3XMr",
          "menu-view": "menu-view__1SFv",
          item: "item__JANp",
          "menu-view-delete": "menu-view-delete__3bgC",
          "delete-button": "delete-button__2Yvm"
      }
  },
  ND7ooQfY: function(e, t, n) {
      e.exports = {
          "create-gantt-view-button": "create-gantt-view-button__3xAo",
          "gantt-view-item": "gantt-view-item__2fbz",
          active: "active__3BUC",
          icon: "icon__3WBl",
          title: "title__3huy"
      }
  },
  O1NJwZNy: function(e, t, n) {
      e.exports = {
          executor: "executor__1eK3"
      }
  },
  "Oc+P9SdO": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return d
      });
      var a = n("D57KnuyU")
        , r = n("nsO7MZxy")
        , o = n("cDcdfi41")
        , i = n("/GeFQFAU")
        , c = n("/C7jNg4H")
        , l = n("257OH2E0")
        , s = n("SdndzpB1")
        , u = n("oPs7WnEA")
        , d = function(e, t, n) {
          var d = t.customView$
            , p = t.sortBy$
            , f = t.searchersFilter$
            , m = t.customViewHasChanged$
            , b = Object(i.c)(d)
            , g = Object(o.useCallback)(function() {
              var t = Object(l.a)(e)
                , n = Object(c.b)(e);
              return {
                  searchersFilter: s.a,
                  sortBy: {
                      key: "pos",
                      order: 1
                  },
                  columns: n,
                  groupBySelectOption: t
              }
          }, [e])
            , v = Object(a.__read)(Object(o.useState)(g()), 2)
            , h = v[0]
            , O = v[1];
          Object(o.useEffect)(function() {
              b ? (O(b),
              p.next(b.sortBy),
              f.next(b.searchersFilter),
              n(b.searchersFilter.tql)) : (O(g()),
              p.next(g().sortBy),
              f.next(Object(a.__assign)(Object(a.__assign)({}, f.value), {
                  searchInput: s.a.searchInput,
                  filters: s.a.filters,
                  tqlValues: Object(u.getTqlValuesByFilters)(s.a.filters)
              })),
              n(s.a.tql))
          }, [b, f, p, g]);
          var j = Object(o.useCallback)(function(t, n) {
              var o;
              o = Object(r.isFunction)(t) ? t(h) : t;
              var i = Object(a.__assign)(Object(a.__assign)({}, h), o);
              Object(r.isEqual)(i, h) || (b ? O(i) : (o.columns ? Object(c.c)(e, o.columns) : o.groupBySelectOption && Object(l.b)(e, o.groupBySelectOption),
              O(i)),
              n || m.next(!0))
          }, [b, O, e, h, m]);
          return {
              currentView: h,
              updateCurrentView: j
          }
      }
  },
  OvixFIaP: function(e, t, n) {
      e.exports = {
          date: "date__hqPF"
      }
  },
  QKgL9JNG: function(e, t, n) {
      e.exports = {
          "fold-handle": "fold-handle__1yDM",
          arrow: "arrow__3Eks",
          off: "off__3qO7",
          loose: "loose__Mlkx"
      }
  },
  R4ZXC841: function(e, t, n) {
      e.exports = {
          gantt: "gantt__3Xim"
      }
  },
  "RVM3N+vd": function(e, t, n) {
      e.exports = {
          "head-cell": "head-cell__cL1U",
          ellipsis: "ellipsis__315v",
          sortable: "sortable___z3_"
      }
  },
  "RZK/vaYK": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return u
      });
      var a = n("cDcdfi41")
        , r = n.n(a)
        , o = n("O94r4YFm")
        , i = n.n(o)
        , c = n("HzCjrc5d")
        , l = n("m0+xvcv5")
        , s = n.n(l)
        , u = function(e) {
          var t, n = e.task, a = e.disabled, o = Object(c.f)(n, "milestone"), l = o.fill, u = o.stroke, d = i()(s.a.milestone, ((t = {})[s.a.disabled] = a,
          t));
          return r.a.createElement("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              version: "1.1",
              className: d
          }, r.a.createElement("g", {
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd"
          }, r.a.createElement("g", {
              transform: "translate(1, -4)",
              fill: l,
              stroke: u
          }, r.a.createElement("path", {
              d: "M5.47823474,6.12999477 L10.7426798,5.61956295 C11.5672401,5.53961494 12.3004891,6.14324254 12.3804371,6.96780292 C12.3897722,7.06408294 12.3897722,7.16104022 12.3804371,7.25732024 L11.8700052,12.5217653 C11.8007792,13.235742 11.235742,13.8007792 10.5217653,13.8700052 L5.25732024,14.3804371 C4.43275986,14.4603851 3.69951095,13.8567575 3.61956295,13.0321971 C3.61022779,12.9359171 3.61022779,12.8389598 3.61956295,12.7426798 L4.12999477,7.47823474 C4.19922076,6.76425802 4.76425802,6.19922076 5.47823474,6.12999477 Z",
              transform: "translate(8.000000, 10.000000) rotate(-45.000000) translate(-8.000000, -10.000000)"
          }))))
      }
  },
  Rz8vyGAj: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("ziER8GQF")
        , r = n.n(a)
        , o = n("5JeMfCdX")
        , i = n.n(o)
        , c = new r.a({
          id: "baseline-placeholder",
          use: "baseline-placeholder-usage",
          viewBox: "0 0 58 53",
          content: '<symbol viewBox="0 0 58 53" id="baseline-placeholder"><g fill="none" fill-rule="evenodd" stroke="#BFBFBF"><g><path fill="#FFFFFF" d="M2 .5A1.5 1.5 0 0 0 .5 2v40A1.5 1.5 0 0 0 2 43.5h23c11.874 0 21.5-9.626 21.5-21.5V2A1.5 1.5 0 0 0 45 .5H2z" /><rect width="33" height="4" x="6.5" y="8.5" fill="#F0F0F0" rx="2" /><rect width="19" height="4" x="6.5" y="17.5" fill="#F0F0F0" rx="2" /><rect width="21" height="4" x="6.5" y="26.5" fill="#F0F0F0" rx="2" /></g><g transform="translate(26 28)"><path fill="#F0F0F0" d="M18.997.5h-5.994a3 3 0 0 0-2.965 2.544L9.813 4.5H3.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h25a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3h-6.314l-.065-.424-.159-1.032A3 3 0 0 0 18.997.5z" /><circle cx="16" cy="14" r="6.5" fill="#FFFFFF" /><circle cx="16" cy="14" r="4.5" fill="#FFFFFF" /><path stroke-linecap="round" d="M26 7h2M4 7h2" /></g></g></symbol>'
      });
      i.a.add(c);
      t.default = c
  },
  "Sy+izveG": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return i
      });
      var a = n("cDcdfi41")
        , r = n("/GeFQFAU")
        , o = n("dmV+3K1m")
        , i = function(e, t) {
          Object(a.useEffect)(function() {
              var n = o.f.get(e);
              n && t.next(n)
          }, [e, t]);
          var n = Object(r.c)(t);
          return Object(a.useEffect)(function() {
              o.f.set(e, n)
          }, [n, e]),
          n
      }
  },
  T2s1rwmM: function(e, t, n) {
      e.exports = {
          "filter-footer": "filter-footer__3EZE"
      }
  },
  TZ9VkvPh: function(e, t, n) {
      "use strict";
      var a = n("q2/Fyv/c");
      n.o(a, "useColumns") && n.d(t, "useColumns", function() {
          return a.useColumns
      }),
      n.o(a, "useDoc") && n.d(t, "useDoc", function() {
          return a.useDoc
      }),
      n.o(a, "useFilterChangeByView") && n.d(t, "useFilterChangeByView", function() {
          return a.useFilterChangeByView
      }),
      n.o(a, "useLocalStore") && n.d(t, "useLocalStore", function() {
          return a.useLocalStore
      }),
      n.o(a, "usePos") && n.d(t, "usePos", function() {
          return a.usePos
      }),
      n.o(a, "useProjectAppStatus") && n.d(t, "useProjectAppStatus", function() {
          return a.useProjectAppStatus
      });
      var r = n("hAtI46P5");
      n.d(t, "useDoc", function() {
          return r.a
      });
      n("9P86uO+r");
      var o = n("Sy+izveG");
      n.d(t, "useLocalStore", function() {
          return o.a
      });
      var i = n("zb7LTpkj");
      n.d(t, "usePos", function() {
          return i.a
      });
      var c = n("WqdNz2e8");
      n.d(t, "useProjectAppStatus", function() {
          return c.a
      });
      var l = n("4bGseOz5");
      n.d(t, "useFilterChangeByView", function() {
          return l.a
      });
      n("Oc+P9SdO"),
      n("FZi6/fIB");
      var s = n("Tqu+zOqp");
      n.d(t, "useColumns", function() {
          return s.a
      });
      n("bmJY4Ofi")
  },
  "Tqu+zOqp": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return i
      });
      var a = n("cDcdfi41")
        , r = n("dmV+3K1m")
        , o = n("oRqJmROU")
        , i = function(e) {
          var t = e.savedColumns
            , n = e.taskFields
            , i = e.startEnabled
            , c = e.fsEnabled
            , l = e.effortEnabled
            , s = Object(a.useMemo)(function() {
              return n ? Array.from(n.values()).filter(function(e) {
                  return !!e.customField
              }).map(function(e) {
                  var t, n;
                  return {
                      width: 108,
                      minWidth: 70,
                      payload: {
                          name: null === (t = e.customField) || void 0 === t ? void 0 : t.name,
                          customFieldId: null === (n = e.customField) || void 0 === n ? void 0 : n._id
                      },
                      visible: !1,
                      keepVisible: !1,
                      sortable: !1
                  }
              }) : []
          }, [n])
            , u = Object(a.useMemo)(function() {
              var e = s.filter(function(e) {
                  return !t.find(function(t) {
                      return t.payload.customFieldId === e.payload.customFieldId
                  })
              })
                , n = t.filter(function(e) {
                  return !e.payload.customFieldId || !!s.find(function(t) {
                      return t.payload.customFieldId === e.payload.customFieldId
                  })
              }).concat(e)
                , a = n.reduceRight(function(e, t) {
                  return e.set(Object(r.c)(t), t),
                  e
              }, new Map);
              return Array.from(new Set(n.map(r.c))).map(function(e) {
                  return a.get(e)
              }).filter(o.c)
          }, [t, s])
            , d = Object(a.useMemo)(function() {
              try {
                  return u.filter(function(e) {
                      switch (e.payload.name) {
                      case "startDate":
                          return i;
                      case "leadDependency":
                          return c;
                      case "effort":
                          return l;
                      default:
                          return !0
                      }
                  })
              } catch (e) {
                  return [r.a.columns[0]]
              }
          }, [u, i, c, l])
            , p = Object(a.useMemo)(function() {
              return d.filter(function(e) {
                  return e.visible
              })
          }, [d]);
          return {
              columns: u,
              enabledColumns: d,
              visibleColumns: p
          }
      }
  },
  UDpBlSq3: function(e, t, n) {
      "use strict";
      var a = n("dAofQ9C9");
      n.o(a, "GroupBySelect") && n.d(t, "GroupBySelect", function() {
          return a.GroupBySelect
      }),
      n.o(a, "useGroupBySelectProps") && n.d(t, "useGroupBySelectProps", function() {
          return a.useGroupBySelectProps
      }),
      n.o(a, "useGroupRowOptions") && n.d(t, "useGroupRowOptions", function() {
          return a.useGroupRowOptions
      });
      var r = n("W3dOuJ5X");
      n.d(t, "useGroupRowOptions", function() {
          return r.a
      });
      var o = n("1BXXRVTn");
      n.d(t, "GroupBySelect", function() {
          return o.a
      });
      var i = n("257OH2E0");
      n.d(t, "useGroupBySelectProps", function() {
          return i.c
      })
  },
  Up0gPlc4: function(e, t, n) {
      e.exports = {
          "popup-head": "popup-head__A-_E",
          popup: "popup__36ac",
          "popup-body": "popup-body__27VI",
          "shared-dropdown": "shared-dropdown__34ZS",
          "shared-titled-dropdown": "shared-titled-dropdown__2LM2"
      }
  },
  VAwXehJg: function(e, t, n) {
      e.exports = {
          "create-baseline-button": "create-baseline-button__3y2J"
      }
  },
  W1pkxjC2: function(e, t, n) {
      e.exports = {
          "lead-dependency": "lead-dependency__3cgD",
          disabled: "disabled__2hQH",
          empty: "empty__28lE",
          text: "text__3Q8b",
          "lead-dependency-input": "lead-dependency-input__iKW9"
      }
  },
  W3dOuJ5X: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return f
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("s0r7VfKc")
        , i = n("OMreQJJ/")
        , c = n("nsO7MZxy")
        , l = n("CB9K9K++")
        , s = n("wgY5hGF4")
        , u = n.n(s)
        , d = n("cP28Uy3B")
        , p = n.n(d)
        , f = function(e, t) {
          var n = Object(a.__read)(Object(r.useState)(void 0), 2)
            , s = n[0]
            , d = n[1];
          return Object(r.useEffect)(function() {
              if (e && t) {
                  var n, a = p.a.get("gantt.majorFilter.separator.minor"), r = null == (n = "_tasklistId" === t ? o.default.fetch.getTasklistsFetch(e._id).pipe(Object(i.map)(function(e) {
                      return e.map(function(e) {
                          return {
                              key: e._id,
                              pos: e.pos,
                              name: e.title,
                              count: e.totalCount,
                              disabled: !1
                          }
                      })
                  })) : "_stageId" === t ? o.default.getTasklists(e._id).changes().pipe(Object(i.switchMap)(function(e) {
                      return l.Observable.combineLatest(e.map(function(e) {
                          return o.default.getTasklistStages(e._id).changes().map(function(t) {
                              return {
                                  tasklist: e,
                                  stages: t
                              }
                          })
                      }))
                  }), Object(i.map)(function(e) {
                      return Object(c.flatten)(e.map(function(e, t) {
                          var n = e.tasklist;
                          return e.stages.map(function(e) {
                              var r, o = null !== (r = n.pos) && void 0 !== r ? r : t, i = n.stageIds.indexOf(e._id);
                              return {
                                  key: e._id,
                                  pos: 1e3 * o + i,
                                  name: n.title + a + e.name,
                                  count: n.totalCount,
                                  disabled: !1
                              }
                          })
                      }))
                  })) : "_sprintId" === t ? o.default.getProjectSprints(e._id).changes().pipe(Object(i.map)(function(e) {
                      return e.map(function(e) {
                          var t = u()(e.created).valueOf() + ("complete" === e.status ? 1e9 : 0);
                          return {
                              key: e._id,
                              pos: t,
                              name: e.name,
                              count: NaN,
                              disabled: "complete" === e.status
                          }
                      }).concat({
                          key: "null",
                          pos: 0,
                          name: p.a.get("sprint.unplanned"),
                          count: NaN,
                          disabled: !1
                      })
                  })) : "_taskflowstatusId" === t ? o.default.getScenarioFieldConfigs(e._id, "task", {
                      withTaskflowstatus: !0
                  }).pipe(Object(i.map)(function(e) {
                      return Object(c.flatten)(e.map(function(e, t) {
                          return e.taskflowstatuses ? e.taskflowstatuses.map(function(n) {
                              return {
                                  key: n._id,
                                  pos: 1e3 * t + n.pos,
                                  name: e.name + a + n.name,
                                  count: NaN,
                                  disabled: "start" !== n.kind,
                                  userdata: {
                                      _scenariofieldconfigId: e._id
                                  }
                              }
                          }) : []
                      }))
                  })) : l.Observable.of([])) ? void 0 : n.subscribe(function(e) {
                      d(new Map(e.map(function(e) {
                          return [e.key, e]
                      })))
                  });
                  return function() {
                      return null == r ? void 0 : r.unsubscribe()
                  }
              }
              d(void 0)
          }, [e, t]),
          s
      }
  },
  Wf9BNPLz: function(e, t, n) {
      e.exports = {
          placeholder: "placeholder__2XD2",
          image: "image__3vlY",
          title: "title__3yFe",
          des: "des__2hsS"
      }
  },
  WqdNz2e8: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return l
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("bvmrLhnu")
        , i = n("gh8QIhMV")
        , c = n("s0r7VfKc");
      function l(e, t) {
          var n = Object(a.__read)(Object(r.useState)(!1), 2)
            , l = n[0]
            , s = n[1];
          return Object(r.useEffect)(function() {
              var n = c.default.getProject(e).changes().map(function(e) {
                  var n = Object(a.__read)(e, 1)[0];
                  return Object(o.isAppEnabled)(n, t)
              }).distinctUntilChanged().subscribe(s, i.throwError);
              return function() {
                  return n.unsubscribe()
              }
          }, [e, t]),
          l
      }
  },
  X2yKdSgg: function(e, t, n) {
      e.exports = {
          archive: "archive__3_58"
      }
  },
  XLkkrFET: function(e, t, n) {
      e.exports = {
          "trial-tip": "trial-tip__mWM_"
      }
  },
  XQtZkpax: function(e, t, n) {
      e.exports = n.p + "images/point.9cb41af3.png"
  },
  Yybq3shZ: function(e, t, n) {
      e.exports = {
          "task-bar-invisible": "task-bar-invisible__1YIP"
      }
  },
  Zhgf5jCo: function(e, t, n) {
      e.exports = {
          "legend-trigger": "legend-trigger__1pxV",
          wrap: "wrap__6Ld4",
          "wrap-header": "wrap-header__3KhD",
          "wrap-legends": "wrap-legends__12ud",
          "legend-item": "legend-item__2TcW",
          legend: "legend__1u91",
          description: "description__3hVx",
          "wrap-help": "wrap-help__646v"
      }
  },
  bmJY4Ofi: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return i
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("iVIWjDWd")
        , i = function(e) {
          var t = Object(a.__read)(Object(r.useState)(void 0), 2)
            , n = t[0]
            , i = t[1];
          return Object(r.useEffect)(function() {
              o.ProjectAccess.hasAdminAuthority(e).then(i)
          }, [e]),
          n
      }
  },
  buZnghp2: function(e, t, n) {
      e.exports = {
          "delete-confirm-container": "delete-confirm-container__S8Tt",
          content: "content__2Xmw",
          "button-wrap": "button-wrap__JtOm"
      }
  },
  cAtmlAWr: function(e, t, n) {
      e.exports = {
          "task-worktime": "task-worktime__MR5k"
      }
  },
  "cBx9Vv7/": function(e, t, n) {
      e.exports = {
          "selection-indicator": "selection-indicator__3rr6"
      }
  },
  cKfi1BKt: function(e, t, n) {
      e.exports = {
          ellipsis: "ellipsis__yroU"
      }
  },
  dAofQ9C9: function(e, t) {},
  eFbPB9K3: function(e, t, n) {
      e.exports = {
          "task-row-trigger": "task-row-trigger__1Xhy",
          loose: "loose__1EBV",
          disabled: "disabled__1RTC"
      }
  },
  "ezPE+7qE": function(e, t, n) {
      e.exports = {
          "task-bar-thumb": "task-bar-thumb__2suT",
          right: "right__3MHd",
          left: "left__3u5u"
      }
  },
  fNzAywdm: function(e, t, n) {
      e.exports = {
          text: "text__aNJc",
          input: "input__3gEb"
      }
  },
  fUQRxr5F: function(e, t, n) {
      e.exports = {
          "time-axis": "time-axis__3meF",
          "render-chunk": "render-chunk__28qu"
      }
  },
  "gfJw/2s3": function(e, t, n) {
      e.exports = {
          "setting-titled-dropdown": "setting-titled-dropdown__XyrZ",
          "content-container": "content-container__SsP8",
          "title-container": "title-container__2zV8"
      }
  },
  "glG/mlnF": function(e, t, n) {
      e.exports = {
          "group-by-select": "group-by-select__13ah",
          disabled: "disabled__y0OD",
          "selected-label": "selected-label__3Jdo",
          dropdown: "dropdown__GIor",
          footer: "footer__3BPQ"
      }
  },
  hAtI46P5: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return d
      });
      var a = n("cDcdfi41")
        , r = n("wgY5hGF4")
        , o = n.n(r)
        , i = n("ptBKV45J")
        , c = n("KObrIyx2")
        , l = n("6rXl/bxS")
        , s = function(e) {
          if ("start_start" === e)
              return c.a.ss;
          if ("start_finish" === e)
              return c.a.sf;
          if ("finish_finish" === e)
              return c.a.ff;
          if ("finish_start" === e)
              return c.a.fs;
          throw new Error("unreach: " + e)
      }
        , u = function(e) {
          return {
              id: e._id,
              parentId: e._taskId,
              content: e.content,
              pos: e.pos,
              effort: e.effort,
              start: e.startDate ? o()(e.startDate) : void 0,
              end: e.dueDate ? o()(e.dueDate) : void 0,
              _executorId: e._executorId,
              executor: e.executor,
              _scenariofieldconfigId: e._scenariofieldconfigId,
              scenariofieldconfig: e.scenariofieldconfig,
              _sprintId: e._sprintId,
              _tasklistId: e._tasklistId,
              _taskflowstatusId: e._taskflowstatusId,
              _stageId: e._stageId,
              isDone: e.isDone,
              tbTask: e
          }
      }
        , d = function(e, t, n, r, c, d) {
          var p = Object(l.g)(e).isMilestone
            , f = Object(a.useMemo)(function() {
              return new Map(null == c ? void 0 : c.map(function(e) {
                  return [e._taskId, {
                      id: e._taskId,
                      start: e.startDate ? o()(e.startDate) : void 0,
                      end: e.dueDate ? o()(e.dueDate) : void 0
                  }]
              }))
          }, [c])
            , m = Object(a.useMemo)(function() {
              if (f && p && d)
                  return null == t ? void 0 : t.map(function(e) {
                      var t = u(e);
                      if (t.baseline = f.get(t.id),
                      p(t) && !t.start && t.end && (t.start = t.end.clone().add(-1, "millisecond")),
                      d) {
                          var n = d(t.id);
                          null != n && (t.pos = n)
                      }
                      return t
                  })
          }, [t, f, d, p])
            , b = Object(a.useMemo)(function() {
              return null == n ? void 0 : n.map(u)
          }, [n])
            , g = Object(a.useMemo)(function() {
              return null == r ? void 0 : r.map(function(e) {
                  return {
                      id: e._id,
                      fromId: e._fromId,
                      toId: e._toId,
                      kind: s(e.kind),
                      lag: e.lagTime
                  }
              })
          }, [r]);
          return Object(a.useMemo)(function() {
              if (m && g && b && f)
                  return new i.a(m,b,g)
          }, [m, g, b, f])
      }
  },
  iGbvo7jU: function(e, t, n) {
      e.exports = {
          container: "container__1PWP",
          body: "body__3LBc"
      }
  },
  iGfT7uno: function(e, t, n) {
      e.exports = {
          "resize-handle": "resize-handle__3s57",
          loose: "loose__1VX0",
          left: "left__2J1_",
          right: "right__1LvQ",
          fill: "fill__3O1v",
          disabled: "disabled__11z_"
      }
  },
  iv0M010j: function(e, t, n) {
      e.exports = {
          "head-row-index": "head-row-index__24Rh",
          "column-item": "column-item__3RTs",
          disabled: "disabled__1dND",
          helper: "helper__hYg2",
          inner: "inner__wC6q",
          label: "label__1xW-",
          handler: "handler__1C03"
      }
  },
  "iz1i0T/+": function(e, t, n) {
      var a, r, o = {}.hasOwnProperty;
      r = n("vmWJWrVe"),
      a = n("judPSVoC").GanttApp,
      n("oDmDJJFE"),
      e.exports = function(e) {
          function t() {
              return t.__super__.constructor.apply(this, arguments)
          }
          return function(e, t) {
              for (var n in t)
                  o.call(t, n) && (e[n] = t[n]);
              function a() {
                  this.constructor = e
              }
              a.prototype = t.prototype,
              e.prototype = new a,
              e.__super__ = t.prototype
          }(t, r),
          t.prototype.viewName = "GanttAppView",
          t.prototype.className = "gantt-app-view",
          t.prototype.initialize = function(e) {
              return this._projectId = e._projectId,
              this.projectModel = e.projectModel,
              this.requestReactView(this.el, a, {
                  projectId: this._projectId
              }, {
                  redux: !0
              })
          }
          ,
          t
      }()
  },
  judPSVoC: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n.n(r)
        , i = n("yrnKFwh2")
        , c = n("OMreQJJ/")
        , l = n("IqVDb1G9")
        , s = n("xnbxzVXX")
        , u = n("O94r4YFm")
        , d = n.n(u)
        , p = n("cP28Uy3B")
        , f = n.n(p)
        , m = n("p8P8vxSn")
        , b = n("kEFXGxyL")
        , g = n("s0r7VfKc")
        , v = n("HzCjrc5d")
        , h = n("oq1bWpp9")
        , O = n.n(h)
        , j = n("gh8QIhMV")
        , y = n("90U+kJWN")
        , k = n("/GeFQFAU")
        , _ = n("HMnzpz2z")
        , w = n("D15MKVbL")
        , E = n("iCr2nGAb")
        , x = n("ptBKV45J")
        , C = n("ao0CopS7")
        , I = n("6rXl/bxS")
        , S = n("wA8z6RSR")
        , M = n("TXlGSMJD")
        , N = n("dmV+3K1m")
        , T = n("a+N5u/Cl")
        , D = n.n(T)
        , R = n("GESwhXbR")
        , F = n("bvmrLhnu")
        , P = n("wScl0p2y")
        , B = n("BsTK5jZO")
        , L = n("sBvnAUeQ")
        , V = n("O1NJwZNy")
        , $ = n.n(V)
        , A = function(e) {
          var t = e.hasPermission
            , n = e.defaultValue ? e.defaultValue : B.ExecutorInput.userInvolverAsUser(B.ExecutorInput.noExecutor.get())
            , a = !e.defaultValue;
          return o.a.createElement("div", {
              className: d()(e.className, $.a.executor, {
                  hasPermission: t,
                  empty: a
              }),
              onClick: t ? e.onClick : void 0
          }, o.a.createElement(L.Avatar, {
              src: n.avatarUrl,
              size: "xsmall",
              className: "gantt-app-outline-executor-avatar"
          }), o.a.createElement("span", {
              className: "text"
          }, n.name))
      }
        , q = n("3eMzznN/")
        , z = n("OvixFIaP")
        , U = n.n(z)
        , X = function(e) {
          var t = e.hasPermission
            , n = e.defaultValue ? Object(q.formatDate)(e.defaultValue, {
              isUsePref: !0
          }) : {
              dateString: f.a.get("gantt.app.outline.task.date.unset")
          }
            , a = !e.defaultValue;
          return o.a.createElement("div", {
              className: d()(e.className, U.a.date, {
                  hasPermission: t,
                  empty: a
              }),
              onClick: t ? e.onClick : void 0
          }, o.a.createElement("span", {
              className: "text"
          }, n.dateString))
      }
        , G = n("pBZAlJwF")
        , K = n("p3jMh/4q")
        , H = n("6VtgPXrx")
        , W = n("p/xIafCG")
        , Y = n.n(W)
        , J = n("ouFMKYqL")
        , Q = n("EkhPnNBn")
        , Z = R.Balloon.Tooltip
        , ee = function(e) {
          var t = e.defaultValue
            , n = e.hasPermission
            , i = Object(a.__read)(Object(r.useState)(0), 2)
            , c = i[0]
            , l = i[1]
            , s = Object(r.useRef)(0)
            , u = Object(J.b)()
            , d = Object(Q.c)(u);
          Object(r.useEffect)(function() {
              if (null !== t) {
                  s.current = t / d;
                  var e = Number((t / d).toFixed(2));
                  l(e)
              }
          }, [t, d]);
          var p = function() {
              if (!s.current) {
                  var t = Number((c * d).toFixed(2)) || null;
                  e.onChange(t)
              }
          }
            , m = o.a.createElement("div", {
              onKeyDownCapture: Q.d
          }, o.a.createElement(R.NumberPicker, {
              autoFocus: e.autoFocus,
              onKeyPress: function(e) {
                  13 === e.which && (e.preventDefault(),
                  p())
              },
              disabled: !n,
              value: c,
              placeholder: f.a.get("gantt.app.outline.task.effort.placeholder"),
              className: Y.a.input + " gantt-app-outline-effort",
              onBlur: function() {
                  p()
              },
              onChange: function(e) {
                  e && !Q.a.test(e.toString()) || (l(e),
                  s.current && (s.current = null))
              },
              format: function(e) {
                  var n = e * d;
                  return null !== t ? Object(Q.b)(n, d) : f.a.get("gantt.app.outline.task.effort.unset")
              },
              precision: 2,
              onClick: function(e) {
                  e.stopPropagation()
              },
              style: e.style
          }));
          return null !== t ? o.a.createElement(Z, {
              hidden: e.tipHidden,
              align: "t",
              trigger: m
          }, Object(Q.b)(t, d)) : m
      }
        , te = function(e) {
          return o.a.createElement(P.ErrorBoundary, null, o.a.createElement(ee, Object(a.__assign)({}, e)))
      }
        , ne = n("dLlRnP2h")
        , ae = n("EiUFTky8")
        , re = n("ClVl5xsi")
        , oe = n("2a8VZ508")
        , ie = n.n(oe);
      function ce(e) {
          return o.a.createElement("div", {
              className: d()(e.className, ie.a["task-trace"]),
              style: e.style
          }, o.a.createElement(re.c, {
              status: e.trace.status,
              size: 11
          }), o.a.createElement("span", {
              className: ie.a.text
          }, e.trace.title))
      }
      var le = n("cAtmlAWr")
        , se = n.n(le);
      function ue(e) {
          var t = Object(r.useMemo)(function() {
              switch (e.unit) {
              case "hour":
                  return f.a.get("task.worktime.format.time", e.value);
              case "minute":
                  return f.a.get("task.worktime.format.time", e.value / 60);
              default:
                  return e.value
              }
          }, [e.unit, e.value]);
          return o.a.createElement("div", {
              className: se.a["task-worktime"]
          }, o.a.createElement("span", {
              className: "text"
          }, t))
      }
      var de, pe = n("GqmZah18"), fe = function(e) {
          function t() {
              var t = null !== e && e.apply(this, arguments) || this;
              return t.rootClassName = "task-custom-field",
              t
          }
          return Object(a.__extends)(t, e),
          t.prototype.onCellContentClick = function(e) {
              "A" === e.target.tagName && (Object(ne.linkHandler)(e.target, void 0, function() {}),
              e.preventDefault(),
              e.stopPropagation())
          }
          ,
          t.prototype.renderWellKnownAppCustomField = function(e, t) {
              var n;
              switch (e.source) {
              case "application.trace":
                  var o = null == (i = t.value[0]) ? void 0 : i.meta;
                  return o && r.createElement(ce, Object(a.__assign)({}, this.props, {
                      trace: o
                  }));
              case "application.worktime":
                  var i = t.value[0]
                    , c = Number(null == i ? void 0 : i.title)
                    , l = (null !== (n = null == i ? void 0 : i.meta) && void 0 !== n ? n : {}).unit;
                  return !isNaN(c) && r.createElement(ue, Object(a.__assign)({}, this.props, {
                      value: c,
                      unit: l
                  }))
              }
              return null
          }
          ,
          t.prototype.render = function() {
              var e = this.props.field
                , t = e.customField
                , n = e.customFieldEntity;
              if (!t)
                  return null;
              var o, i = this.props.task.customfields.find(function(e) {
                  return e._customfieldId === t._id
              });
              if (!i)
                  return null;
              if ("app" === t.boundToObjectType && t.source) {
                  var c = this.renderWellKnownAppCustomField(t, i);
                  if (c)
                      return c
              }
              var l = Object(a.__assign)(Object(a.__assign)({}, t), n || {})
                , s = Object(ae.taskCustomFieldFormatter)(l, Object(a.__assign)(Object(a.__assign)({}, i), {
                  type: i.type || t.type
              }))
                , u = pe[this.rootClassName];
              if ("text" === i.type) {
                  var d = Object(y.formatHyperLink)(s || "");
                  o = r.createElement("div", {
                      className: pe[this.rootClassName + "__inner"],
                      title: s || void 0,
                      onClick: this.onCellContentClick,
                      dangerouslySetInnerHTML: {
                          __html: d
                      }
                  })
              } else
                  o = r.createElement("div", {
                      className: pe[this.rootClassName + "__inner"],
                      title: s || void 0
                  }, s);
              return r.createElement("div", {
                  className: u,
                  onClick: this.props.onClick
              }, o)
          }
          ,
          t
      }(r.PureComponent), me = function(e) {
          var t = Object(v.q)().scenarioFieldConfigs$
            , n = e.dropdownRef
            , a = e.editorRef
            , c = Object(k.D)()
            , l = Object(k.c)(t)
            , s = Object(v.i)(e.task, l)
            , u = Object(k.m)(function() {
              var t = I.a.define({
                  task: e.task
              });
              switch (e.field.name) {
              case "_executorId":
              case "executor":
                  return t.can(I.a.Action.EditTaskExecutor);
              case "startDate":
                  return s ? i.Observable.of(!1) : t.can(I.a.Action.EditTaskStartDate);
              case "dueDate":
                  return t.can(I.a.Action.EditTaskDueDate);
              case "effort":
                  return t.can(I.a.Action.EditTaskEffort);
              default:
                  return e.field.isScenarioField ? t.can(I.a.Action.EditCustomField) : i.Observable.of(!1)
              }
          }, [e.task, e.field])
            , d = Object(r.useCallback)(function(t) {
              switch (n && n.close(),
              e.field.name) {
              case "_executorId":
              case "executor":
                  if (t === e.task._executorId)
                      return;
                  b.gta.event({
                      action: "change assignee",
                      control: "Executor",
                      page: "gantt page",
                      category: "outline"
                  });
                  break;
              case "startDate":
                  if (t === e.task[e.field.name])
                      return;
                  b.gta.event({
                      action: "edit start date",
                      control: "Startdate",
                      page: "gantt page",
                      category: "outline"
                  });
                  break;
              case "dueDate":
                  if (t === e.task[e.field.name])
                      return;
                  b.gta.event({
                      action: "edit due date",
                      control: "Duedate",
                      page: "gantt page",
                      category: "outline"
                  });
                  break;
              case "effort":
                  if (t === e.task[e.field.name])
                      return;
                  b.gta.event({
                      action: "edit input date",
                      page: "gantt page",
                      category: "outline"
                  })
              }
              var a = Object(H.e)(e.task._id, e.field, t).subscribe({
                  error: j.throwError
              });
              c.guarantee(a)
          }, [e.task, e.field, n, c])
            , p = Object(r.useCallback)(function(t) {
              if (n) {
                  var a;
                  switch (e.field.name) {
                  case "_executorId":
                  case "executor":
                      a = o.a.createElement(K.a, {
                          organizationId: e._organizationId,
                          projectId: e.task._projectId,
                          defaultValue: e.task.executor,
                          onChange: d
                      });
                      break;
                  case "startDate":
                      a = o.a.createElement(G.a, {
                          pickerType: e.field.name,
                          defaultValue: e.task.startDate,
                          endDate: e.task.dueDate,
                          onChange: d
                      });
                      break;
                  case "dueDate":
                      a = o.a.createElement(G.a, {
                          pickerType: e.field.name,
                          defaultValue: e.task.dueDate,
                          startDate: e.task.startDate,
                          onChange: d
                      })
                  }
                  a && (n.render({
                      content: a
                  }),
                  n.open(t))
              }
          }, [e.task, e.field, d, n, e._organizationId])
            , f = Object(r.useCallback)(function(t) {
              a && a.edit(e.task, e.field, t, function() {})
          }, [e.task, e.field, a]);
          if (e.field.customField)
              return o.a.createElement(fe, {
                  task: e.task,
                  field: e.field,
                  onClick: f
              });
          switch (e.field.name) {
          case "_executorId":
          case "executor":
              return o.a.createElement(A, {
                  className: e.className,
                  hasPermission: u,
                  defaultValue: e.task.executor,
                  onClick: p
              });
          case "startDate":
          case "dueDate":
              return o.a.createElement(X, {
                  className: e.className,
                  hasPermission: u,
                  defaultValue: e.task[e.field.name],
                  onClick: p
              });
          case "effort":
              return s ? null : o.a.createElement(te, {
                  className: e.className,
                  defaultValue: e.task[e.field.name],
                  onChange: d,
                  hasPermission: u
              });
          default:
              return null
          }
      }, be = n("oRPyOBnq"), ge = n("DWJahcmN"), ve = n("X2yKdSgg"), he = n.n(ve), Oe = function(e) {
          return o.a.createElement("div", {
              className: he.a.archive
          }, o.a.createElement("p", null, e.label), o.a.createElement(m.Button, {
              danger: !0,
              onClick: e.onClick,
              block: !0
          }, f.a.get("gantt.app.outline.task.archive")))
      }, je = n("mrKGYOJc"), ye = n.n(je);
      !function(e) {
          e[e.Main = 0] = "Main",
          e[e.SelectScenarioFieldConfig = 1] = "SelectScenarioFieldConfig",
          e[e.SelectTaskflowStatus = 2] = "SelectTaskflowStatus",
          e[e.Archive = 3] = "Archive"
      }(de || (de = {}));
      var ke, _e = function(e) {
          var t, n, c, l, s, u, p, g, v = Object(r.useRef)(null), h = Object(a.__read)(Object(r.useState)(!1), 2), O = h[0], j = h[1], y = Object(r.useCallback)(function() {
              j(!0),
              b.gta.event({
                  action: "opened task menu",
                  page: "gantt page"
              })
          }, []), _ = Object(r.useCallback)(function() {
              return j(!1)
          }, []), w = Object(k.m)(function() {
              return O ? e.canIndent(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canIndent, e.row]), E = Object(k.m)(function() {
              return O ? e.canUnindent(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canUnindent, e.row]), x = Object(k.m)(function() {
              return O ? e.canAdd(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canAdd, e.row]), C = Object(k.m)(function() {
              return O ? e.canAddChild(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canAddChild, e.row]), I = Object(k.m)(function() {
              return O ? e.canSelectScenarioFieldConfig(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canSelectScenarioFieldConfig, e.row]), S = Object(k.m)(function() {
              return O ? e.canArchive(e.row).map(function(e) {
                  return e.result
              }) : i.Observable.of(!1)
          }, [O, e.canArchive, e.row]), M = Object(r.useCallback)(function() {
              e.onRowOpen(e.row),
              b.gta.event({
                  action: "opened task menu",
                  page: "gantt page",
                  category: "task menu"
              }),
              v.current && v.current.close()
          }, [e.onRowOpen, e.row]), N = Object(r.useCallback)(function() {
              e.onRowIndent(e.row),
              v.current && v.current.close()
          }, [e.onRowIndent, e.row]), T = Object(r.useCallback)(function() {
              e.onRowUnindent(e.row),
              v.current && v.current.close()
          }, [e.onRowUnindent, e.row]), D = Object(r.useCallback)(function() {
              e.onRowAdd(e.row),
              v.current && v.current.close()
          }, [e.onRowAdd, e.row]), R = Object(r.useCallback)(function() {
              e.onRowAddChild(e.row),
              v.current && v.current.close()
          }, [e.onRowAddChild, e.row]), F = Object(a.__read)(Object(r.useState)(null), 2), P = F[0], B = F[1], L = Object(a.__read)(Object(r.useState)(null), 2), V = L[0], $ = L[1], A = Object(a.__read)(Object(r.useState)(null), 2), q = A[0], z = A[1], U = Object(r.useCallback)(function(t, n) {
              e.onRowSelectScenarioFieldConfig(e.row, t, n),
              v.current && v.current.close()
          }, [e.onRowSelectScenarioFieldConfig, e.row]), X = Object(r.useCallback)(function() {
              v.current && (v.current.reset(),
              v.current.close()),
              e.onRowArchive(e.row)
          }, [e.onRowArchive, e.row]);
          return o.a.createElement(m.PopupMenu, {
              ref: v,
              main: de.Main,
              trigger: o.a.createElement("div", {
                  className: d()(ye.a["menu-trigger"], {
                      opened: O
                  })
              }, o.a.createElement(m.Icon, {
                  name: "more"
              })),
              className: ye.a.popup,
              titleCls: ye.a["popup-head"],
              onOpen: y,
              onClose: _,
              placement: "bottom-start"
          }, (n = o.a.createElement(m.MenuItem, {
              onClick: M
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.open.detail"))),
          c = w ? o.a.createElement(m.MenuItem, {
              onClick: N
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.convert.to.subtask")), o.a.createElement("span", {
              className: "hotkey"
          }, o.a.createElement("b", null, "tab"))) : null,
          l = E ? o.a.createElement(m.MenuItem, {
              onClick: T
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.convert.to.parent")), o.a.createElement("span", {
              className: "hotkey"
          }, o.a.createElement("b", null, "shift"), "+", o.a.createElement("b", null, "tab"))) : null,
          s = x ? o.a.createElement(m.MenuItem, {
              onClick: D
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.add.new.task")), o.a.createElement("span", {
              className: "hotkey"
          }, o.a.createElement("b", null, "enter"))) : null,
          u = C ? o.a.createElement(m.MenuItem, {
              onClick: R
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.add.new.subtask"))) : null,
          p = I ? o.a.createElement(m.PopupMenuLink, {
              goto: de.SelectScenarioFieldConfig
          }, o.a.createElement(m.MenuItem, null, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.select.type")))) : null,
          g = S ? o.a.createElement(m.PopupMenuLink, {
              goto: de.Archive
          }, o.a.createElement(m.MenuItem, {
              className: ye.a.danger
          }, o.a.createElement("span", {
              className: "text"
          }, f.a.get("gantt.app.outline.task.archive")))) : null,
          o.a.createElement(m.PopupMenuView, {
              index: de.Main,
              title: f.a.get("gantt.app.outline.task.menu"),
              className: ye.a["popup-body"]
          }, o.a.createElement(m.Menu, {
              className: ye.a["main-view"]
          }, n, c, l, s, u, p, o.a.createElement(m.Separator, null), g))), (t = e.scenarioFieldConfigs.map(function(t) {
              var n = "task" === e.row.kind && t._id === e.row.payload._scenariofieldconfigId;
              return o.a.createElement(m.MenuItem, {
                  key: t._id,
                  onClick: function() {
                      var e = (t && t.taskflowstatuses || []).filter(function(e) {
                          return "start" === e.kind
                      });
                      B(t),
                      $(e),
                      z(e[0] && e[0]._id || null),
                      v.current && v.current.goTo(de.SelectTaskflowStatus)
                  }
              }, o.a.createElement("span", {
                  className: "box"
              }, o.a.createElement(be.FieldIcon, {
                  type: t.objectType,
                  icon: t.icon
              })), o.a.createElement("span", {
                  className: "text"
              }, t.name), n ? o.a.createElement(m.Icon, {
                  name: "tick"
              }) : null)
          }),
          o.a.createElement(m.PopupMenuView, {
              index: de.SelectScenarioFieldConfig,
              title: f.a.get("gantt.app.outline.task.select.type"),
              className: ye.a["popup-body"]
          }, o.a.createElement(m.Menu, {
              className: ye.a["select-scenario-field-config-view"]
          }, t))), function() {
              var e = V && V.length >= 1 ? o.a.createElement(o.a.Fragment, null, o.a.createElement(ge.TaskflowStatusLabelList, {
                  type: "task",
                  data: V,
                  selectedId: q || void 0,
                  onSelect: z
              }), o.a.createElement(m.Separator, null), o.a.createElement("p", null, f.a.get("gantt.app.outline.task.select.type.desc.2"))) : o.a.createElement("p", null, f.a.get("gantt.app.outline.task.select.type.desc.1"));
              return o.a.createElement(m.PopupMenuView, {
                  index: de.SelectTaskflowStatus,
                  title: f.a.get("gantt.app.outline.task.select.type"),
                  className: ye.a["popup-body"]
              }, o.a.createElement("div", {
                  className: ye.a["select-taskflow-status-view"]
              }, e, o.a.createElement(m.Button, {
                  onClick: function() {
                      P && U(P, q)
                  },
                  block: !0
              }, f.a.get("confirm"))))
          }(), o.a.createElement(m.PopupMenuView, {
              index: de.Archive,
              title: f.a.get("gantt.app.outline.task.archive"),
              className: ye.a["popup-body"]
          }, o.a.createElement(Oe, {
              label: f.a.get("gantt.app.outline.task.archive.label", 1),
              onClick: X
          })))
      }, we = n("Eza+Xah9"), Ee = n("fNzAywdm"), xe = n.n(Ee), Ce = function(e) {
          var t = e.defaultValue || ""
            , n = Object(a.__read)(Object(r.useState)(t), 2)
            , i = n[0]
            , c = n[1]
            , l = Object(r.useCallback)(function(e) {
              c(e.currentTarget.value)
          }, [])
            , s = Object(r.useRef)(null)
            , u = Object(r.useRef)(!1)
            , p = Object(a.__read)(Object(r.useState)(Boolean(e.hasPermission && e.autoFocus)), 2)
            , f = p[0]
            , b = p[1];
          Object(r.useEffect)(function() {
              b(function(t) {
                  return Boolean(e.hasPermission && e.autoFocus) || t
              })
          }, [e.hasPermission, e.autoFocus]);
          var g = Object(r.useCallback)(function() {
              e.hasPermission && (b(!0),
              we.a.event({
                  action: "gantt.createTask.stage1.focus",
                  mode: "gantt"
              }))
          }, [e.hasPermission])
            , v = Object(r.useCallback)(function(e) {
              0 !== e.currentTarget.value.trim().length && (u.current = !0,
              s.current && s.current.blur())
          }, [])
            , h = Object(r.useCallback)(function(n) {
              var a = n.currentTarget.value.trim();
              e.onSave(a, u.current),
              u.current = !1,
              b(!1),
              0 === a.length && c(t)
          }, [e.onSave, t])
            , O = Object(r.useCallback)(function(t) {
              9 === t.which && (t.preventDefault(),
              t.shiftKey ? e.onUnindent() : e.onIndent()),
              8 === t.which && 0 === t.currentTarget.value.trim().length && e.onArchive(t)
          }, [e.onUnindent, e.onIndent, e.onArchive]);
          return f ? o.a.createElement(m.Input, {
              ref: s,
              className: d()(xe.a.input, "gantt-app-outline-content-input", e.className),
              value: i,
              placeholder: e.placeholder,
              onChange: l,
              autoFocus: !0,
              onPressEnter: v,
              onBlur: h,
              onKeyDown: O
          }) : o.a.createElement("div", {
              className: d()(xe.a.text, e.className, {
                  disabled: !e.hasPermission
              }),
              onClick: g
          }, o.a.createElement("div", {
              className: "ellipsis hinted",
              "data-title": i.trim()
          }, i.trim()))
      }, Ie = function(e) {
          var t = e.dropdownRef
            , n = Object(k.m)(function() {
              return Object(N.e)(e.task) ? i.Observable.of(!0) : I.a.define({
                  task: e.task
              }).can(I.a.Action.EditTaskContent)
          }, [e.task])
            , a = Object(N.g)(e.canIndent, [e.canIndent])
            , c = Object(N.g)(e.canUnindent, [e.task, e.canUnindent])
            , l = Object(N.g)(e.canArchive, [e.task, e.canArchive])
            , s = Object(r.useCallback)(function() {
              void 0 !== a && (a.result ? e.onIndent() : a.reason && m.Toast.error({
                  message: a.reason
              }))
          }, [a, e.onIndent])
            , u = Object(r.useCallback)(function() {
              void 0 !== c && (c.result ? e.onUnindent() : c.reason && m.Toast.error({
                  message: c.reason
              }))
          }, [c, e.onUnindent])
            , d = Object(r.useCallback)(function(n) {
              if (!Object(N.e)(e.task) && void 0 !== l)
                  if (l.result) {
                      t && t.render({
                          title: f.a.get("gantt.app.outline.task.archive"),
                          content: o.a.createElement(Oe, {
                              label: f.a.get("gantt.app.outline.task.archive.this"),
                              onClick: function() {
                                  e.onArchive(),
                                  t && t.close()
                              }
                          })
                      }),
                      t && t.open(n)
                  } else
                      l.reason && m.Toast.error({
                          message: l.reason
                      })
          }, [e.task, l, e.onArchive, t]);
          return o.a.createElement(Ce, {
              className: e.className,
              hasPermission: n,
              defaultValue: e.task.content,
              key: e.task.content,
              placeholder: f.a.get("gantt.app.outline.add.task.content"),
              autoFocus: Object(N.e)(e.task),
              onSave: e.onSave,
              onIndent: s,
              onUnindent: u,
              onArchive: d
          })
      }, Se = n("faye7nRW"), Me = n("Up0gPlc4"), Ne = n.n(Me), Te = o.a.forwardRef(function(e, t) {
          var n, i, c = Object(k.w)(), l = Object(a.__read)(Object(r.useState)({}), 2), s = l[0], u = l[1], p = Object(a.__read)(Object(r.useState)(!1), 2), f = p[0], b = p[1], g = Object(a.__read)(Object(r.useState)({
              content: null
          }), 2), v = g[0], h = g[1];
          return Object(r.useImperativeHandle)(t, function() {
              return {
                  open: function(e) {
                      var t = e.currentTarget.getBoundingClientRect();
                      b(!0),
                      u({
                          position: "fixed",
                          top: t.top,
                          left: t.left,
                          width: t.width,
                          height: t.height,
                          visibility: "hidden"
                      })
                  },
                  close: function() {
                      return b(!1)
                  },
                  render: h
              }
          }),
          Object(Se.createPortal)((n = "string" == typeof v.title,
          i = n ? m.TitledDropdown : m.Dropdown,
          o.a.createElement(i, Object(a.__assign)({}, v, {
              opened: f,
              onVisibleChange: b,
              persistence: !0,
              className: n ? d()(Ne.a["shared-titled-dropdown"], Ne.a.popup) : Ne.a["shared-dropdown"],
              titleCls: n ? Ne.a["popup-head"] : void 0,
              contentCls: n ? Ne.a["popup-body"] : void 0,
              placement: "bottom-start",
              transitionCls: ""
          }), o.a.createElement("div", {
              about: "shared-dropdown-trigger",
              style: s,
              className: f ? "" : "hidden"
          }))), c)
      }), De = n("RZK/vaYK"), Re = n("2jFm5lUY"), Fe = n.n(Re), Pe = function(e) {
          return e.stopPropagation()
      }, Be = function(e) {
          var t = e.row
            , n = e.scenarioFieldConfigs
            , a = e.draggable
            , i = Object(v.q)().outlineBodyRowHandleMouseDown$
            , c = Object(r.useMemo)(function() {
              return void 0 === a ? "" : a ? f.a.get("gantt.app.outline.task.open.detail.admin") : f.a.get("gantt.app.outline.task.open.detail")
          }, [a]);
          if ("group" === t.kind || "foot" === t.kind || "root" === t.kind)
              return null;
          var l = Object(v.i)(t.payload, n) ? o.a.createElement(De.a, {
              task: t,
              disabled: Object(N.e)(t.payload.tbTask)
          }) : o.a.createElement("i", null);
          return Object(N.e)(t.payload.tbTask) ? o.a.createElement("div", {
              className: Fe.a["body-row-handle"]
          }, l) : Object(y.isVisibleTask)(t.payload) ? o.a.createElement(m.Tooltip, {
              title: c
          }, o.a.createElement("div", {
              className: d()(Fe.a["body-row-handle"], Fe.a.clickable),
              onMouseDown: function(e) {
                  e.preventDefault(),
                  i.next({
                      event: e.nativeEvent,
                      dragRow: t
                  })
              }
          }, l)) : o.a.createElement("div", {
              className: d()(Fe.a["body-row-handle"], Fe.a.private),
              onClick: Pe
          }, o.a.createElement(m.Icon, {
              name: "eye-slash"
          }))
      }, Le = n("oRqJmROU"), Ve = n("CYJibKqy"), $e = n("W1pkxjC2"), Ae = n.n($e), qe = R.Balloon.Tooltip;
      !function(e) {
          e.finish_finish = "FF",
          e.finish_start = "FS",
          e.start_finish = "SF",
          e.start_start = "SS"
      }(ke || (ke = {}));
      var ze = /^(\d+(\.\d+)?)(FF|SF|FS|SS)?(\+|\-)?(\d+(\.\d+)?)?d?$/i
        , Ue = function(e, t) {
          return e.replace(/\s/g, "").replace(/\，/g, ",").split(",").map(function(e) {
              return function(e, t, n) {
                  var a = e.replace(/\s/g, "");
                  if (ze.test(a)) {
                      var r = ze.exec(a);
                      if (r) {
                          var o = Math.round(parseFloat(r[1]))
                            , i = r[3] ? r[3].toUpperCase() : ke.finish_start
                            , c = r[4] && "+" === r[4] ? 1 : -1
                            , l = r[5] ? Math.round(parseFloat(r[5])) : 0
                            , s = Object.keys(n).find(function(e) {
                              return n[e] === o
                          });
                          if (s)
                              return {
                                  _fromId: s,
                                  _toId: t.payload.id,
                                  kind: Ve.a[i],
                                  lagTime: c * l * 864e5
                              }
                      }
                  }
              }(e, t.row, t.outlineRowIndex.dict)
          }).filter(Le.e).filter(function(e) {
              var n = t.getTaskById(e._fromId)
                , a = t.getTaskById(e._toId);
              if (!n || !a)
                  return !1;
              var r = Xe(n).map(function(e) {
                  return e.payload.id
              })
                , o = Xe(a).map(function(e) {
                  return e.payload.id
              });
              return !(r.indexOf(e._toId) > -1) && !(o.indexOf(e._fromId) > -1)
          })
      }
        , Xe = function(e) {
          for (var t = [], n = e.parent; n; )
              t.unshift(n),
              n = n.parent;
          return t
      }
        , Ge = function(e) {
          var t, n = Object(v.q)(), i = n.outlineRowIndex$, c = n.project$, s = n.getTaskById, u = Object(k.c)(i), p = Object(k.c)(c), m = Object(a.__read)(Object(r.useState)(!1), 2), b = m[0], g = m[1], h = Object(a.__read)(Object(r.useState)(""), 2), O = h[0], j = h[1], y = Object(r.useRef)(""), _ = Object(r.useRef)(null), w = Object(k.m)(function() {
              return p ? I.a.define({
                  project: p
              }).can(I.a.Action.DependencyManage) : Object(l.of)(!1)
          }, [p]), E = Object(r.useMemo)(function() {
              return e.dependencies.filter(function(t) {
                  var n = t._toId;
                  return "task" === e.row.kind && n === e.row.payload.id
              })
          }, [e.dependencies, e.row.payload]);
          Object(r.useEffect)(function() {
              var e = E.map(function(e) {
                  return function(e) {
                      var t = e._fromId
                        , n = e.kind
                        , a = e.lagTime
                        , r = e.dict[t];
                      if (!r)
                          return "";
                      var o = a / 864e5;
                      return "" + r + ke[n] + (o > 0 ? "+" : "") + (o || "") + (0 !== o ? "d" : "")
                  }({
                      _fromId: e._fromId,
                      kind: e.kind,
                      lagTime: e.lagTime,
                      dict: u.dict
                  })
              }).join(", ");
              j(e),
              y.current = e
          }, [E, e.row, u.dict]);
          var x = Object(r.useCallback)(function() {
              w && g(!0)
          }, [w])
            , C = function() {
              S(),
              g(!1)
          }
            , S = function() {
              if ("task" === e.row.kind) {
                  var t = Ue(O, {
                      row: e.row,
                      outlineRowIndex: u,
                      getTaskById: s
                  })
                    , n = t.filter(function(e) {
                      return !E.some(function(t) {
                          return t._fromId === e._fromId && t._toId === e._toId && t.kind === e.kind
                      })
                  }).map(function(e) {
                      return Object(a.__assign)(Object(a.__assign)({}, e), {
                          _id: ""
                      })
                  })
                    , r = t.reduce(function(e, t) {
                      var n = E.find(function(e) {
                          return e._fromId === t._fromId && e._toId === t._toId && e.kind === t.kind && e.lagTime !== t.lagTime
                      });
                      return n && e.push(Object(a.__assign)(Object(a.__assign)({}, t), {
                          _id: n._id
                      })),
                      e
                  }, [])
                    , o = E.filter(function(e) {
                      return !t.some(function(t) {
                          return e._fromId === t._fromId && e._toId === t._toId && e.kind === t.kind
                      })
                  }).map(function(e) {
                      return {
                          _fromId: e._fromId,
                          _toId: e._toId,
                          kind: e.kind,
                          lagTime: e.lagTime,
                          _id: e._id
                      }
                  });
                  0 !== n.length || 0 !== r.length || 0 !== o.length ? e.onChange({
                      creates: n,
                      updates: r,
                      deletes: o
                  }) : j(y.current || "")
              }
          };
          if (!b) {
              var M = d()(e.className, Ae.a["lead-dependency"], ((t = {})[Ae.a.disabled] = !w,
              t[Ae.a.empty] = !O,
              t))
                , N = O ? o.a.createElement(qe, {
                  trigger: o.a.createElement("span", {
                      className: Ae.a.text
                  }, O),
                  type: "primary",
                  align: "t"
              }, O) : o.a.createElement("span", {
                  className: Ae.a.text
              }, f.a.get("gantt.app.outline.placeholder.leadDependency.label"));
              return o.a.createElement("div", {
                  className: M,
                  onClick: x
              }, N)
          }
          return o.a.createElement(R.Input, {
              ref: _,
              onBlur: C,
              placeholder: f.a.get("gantt.app.outline.placeholder.leadDependency.input"),
              autoFocus: !0,
              className: Ae.a["lead-dependency-input"] + " gantt-app-outline-lead-dependency-input",
              hasBorder: !1,
              value: O,
              size: "small",
              onChange: function(e) {
                  j(e)
              },
              onKeyDown: function(e) {
                  13 == e.which && C()
              }
          })
      }
        , Ke = n("/C7jNg4H")
        , He = n("1FP7w987")
        , We = n("RVM3N+vd")
        , Ye = n.n(We)
        , Je = function(e) {
          var t;
          return null !== (t = e.payload.key) && void 0 !== t ? t : e.payload.name
      }
        , Qe = function(e) {
          var t, n = Object(v.q)(), a = n.sortBy$, r = n.setSortBy, i = n.customViewHasChanged$, c = Object(k.c)(a), l = Je(e.column);
          return o.a.createElement("div", {
              className: Ye.a["head-cell"],
              onClick: function() {
                  e.column.sortable && (c.key === l ? 1 === c.order ? r(l, -1) : r("pos", -1) : r(l, 1),
                  i.next(!0),
                  b.gta.event({
                      action: "sorted field",
                      page: "gantt page",
                      type: c.key
                  }))
              }
          }, o.a.createElement("span", {
              className: d()(Ye.a.ellipsis, (t = {},
              t[Ye.a.sortable] = e.column.sortable,
              t))
          }, Object(He.a)(e.column), function() {
              if (c.key !== Je(e.column))
                  return null;
              var t = 1 === c.order ? "triangle-down-s" : "triangle-up-s";
              return o.a.createElement(R.Icon, {
                  type: t
              })
          }()))
      }
        , Ze = n("uqr4ebdQ")
        , et = n.n(Ze)
        , tt = n("cKfi1BKt")
        , nt = n.n(tt)
        , at = function(e) {
          return o.a.createElement("span", {
              className: nt.a.ellipsis
          }, e.content)
      }
        , rt = n("iVIWjDWd")
        , ot = n("kMtKmEKr")
        , it = n("2Lo1LbOM")
        , ct = n("1sa5Nkjy")
        , lt = function(e) {
          var t = Object(a.__read)(Object(r.useState)(void 0), 2)
            , n = t[0]
            , i = t[1];
          Object(r.useEffect)(function() {
              rt.ProjectAccess.hasAdminAuthority(e.project._id).then(i)
          }, [e.project._id]);
          var c = Object(k.m)(function() {
              return I.a.define({
                  project: e.project
              }).can(I.a.Action.CreateTask)
          }, [e.project]);
          function l(e) {
              return "group" === e.kind ? "group:" + e.payload.value : "foot" === e.kind ? "foot:" + e.payload.value : "task" === e.kind || "draft" === e.kind ? e.payload.id : "root"
          }
          function s(e) {
              return e.payload.name
          }
          function u() {
              return o.a.createElement(Ke.a, {
                  columns: e.columns,
                  project: e.project,
                  onColumnToggle: e.onColumnToggle,
                  onColumnSort: e.onColumnSort
              })
          }
          function p(e) {
              return o.a.createElement(Qe, {
                  column: e
              })
          }
          function b(t) {
              return "task" !== t.kind ? null : Object(y.isVisibleTask)(t.payload) ? o.a.createElement(_e, {
                  row: t,
                  scenarioFieldConfigs: e.scenarioFieldConfigs,
                  onRowOpen: e.onRowOpen,
                  onRowIndent: e.onRowIndent,
                  onRowUnindent: e.onRowUnindent,
                  onRowAdd: e.onRowAdd,
                  onRowAddChild: e.onRowAddChild,
                  onRowSelectScenarioFieldConfig: e.onRowSelectScenarioFieldConfig,
                  onRowArchive: e.onRowArchive,
                  canIndent: e.canIndent,
                  canUnindent: e.canUnindent,
                  canAdd: e.canAdd,
                  canAddChild: e.canAddChild,
                  canSelectScenarioFieldConfig: e.canSelectScenarioFieldConfig,
                  canArchive: e.canArchive
              }) : null
          }
          function g(e) {
              if ("group" === e.kind) {
                  var t = d()(et.a["body-row-toggler"], et.a["body-row-group"], {
                      collapsed: e.collapsed
                  });
                  return o.a.createElement("div", {
                      className: t
                  }, o.a.createElement(R.Icon, {
                      type: "chevron-down-s"
                  }))
              }
              return "draft" === e.kind && Object(N.e)(e.payload.tbTask) ? null : o.a.createElement("div", {
                  className: d()(et.a["body-row-toggler"], {
                      collapsed: e.collapsed
                  })
              }, o.a.createElement(R.Icon, {
                  type: "triangle-down-s"
              }))
          }
          function v(t) {
              return o.a.createElement(Be, {
                  draggable: n,
                  row: t,
                  onRowOpen: e.onRowOpen,
                  scenarioFieldConfigs: e.scenarioFieldConfigs
              })
          }
          function h(t, n) {
              if ("root" === t.kind)
                  return null;
              var a = n.payload.name;
              if ("foot" === t.kind)
                  return "content" === a ? O(t) : null;
              if ("group" === t.kind)
                  return "content" === a ? o.a.createElement("div", {
                      className: d()(et.a["body-cell"], et.a.group)
                  }, o.a.createElement(at, {
                      content: t.payload.content
                  })) : null;
              if (Object(N.e)(t.payload.tbTask)) {
                  if ("content" !== n.payload.name)
                      return null;
                  var r = function(n, a) {
                      e.onTaskSave(t, n, a)
                  }
                    , i = function() {
                      return e.onRowIndent(t)
                  }
                    , c = function() {
                      return e.onRowUnindent(t)
                  }
                    , l = function() {
                      return e.canIndent(t)
                  }
                    , s = function() {
                      return e.canUnindent(t)
                  }
                    , u = function() {
                      return e.canArchive(t)
                  };
                  return o.a.createElement("div", {
                      className: d()(et.a["body-cell"], "content")
                  }, o.a.createElement(Ie, {
                      task: t.payload.tbTask,
                      onSave: r,
                      onIndent: i,
                      onUnindent: c,
                      onArchive: D.a.noop,
                      canIndent: l,
                      canUnindent: s,
                      canArchive: u,
                      dropdownRef: w.current
                  }))
              }
              var p = t.payload;
              if (!Object(y.isVisibleTask)(p))
                  return "content" === a ? o.a.createElement("div", {
                      className: d()(et.a["body-cell"], et.a.private)
                  }, o.a.createElement("span", {
                      className: et.a.ellipsis
                  }, f.a.get("gantt.app.outline.task.content.private"))) : null;
              switch (a) {
              case "content":
                  r = function(n, a) {
                      e.onTaskSave(t, n, a)
                  }
                  ,
                  i = function() {
                      return e.onRowIndent(t)
                  }
                  ,
                  c = function() {
                      return e.onRowUnindent(t)
                  }
                  ,
                  l = function() {
                      return e.canIndent(t)
                  }
                  ,
                  s = function() {
                      return e.canUnindent(t)
                  }
                  ,
                  u = function() {
                      return e.canArchive(t)
                  }
                  ;
                  return o.a.createElement("div", {
                      className: d()(et.a["body-cell"], "content"),
                      "data-id": p.id
                  }, o.a.createElement(Ie, {
                      className: p.isDone ? et.a.done : void 0,
                      task: p.tbTask,
                      onSave: r,
                      onIndent: i,
                      onUnindent: c,
                      onArchive: function() {
                          return e.onRowArchive(t)
                      },
                      canIndent: l,
                      canUnindent: s,
                      canArchive: u,
                      dropdownRef: w.current,
                      pos: p.pos
                  }));
              case "leadDependency":
                  return o.a.createElement(P.ErrorBoundary, {
                      name: "gantt-task-outline"
                  }, o.a.createElement(Ge, {
                      className: et.a["body-cell"],
                      dependencies: e.dependencies,
                      row: t,
                      onChange: e.onDependencyChange
                  }));
              default:
                  var m = n.payload.customFieldId ? e.taskFields.get(n.payload.customFieldId) : {
                      name: n.payload.name,
                      isScenarioField: !1
                  };
                  return m ? o.a.createElement(me, {
                      className: et.a["body-cell"],
                      task: p.tbTask,
                      field: m,
                      dropdownRef: w.current,
                      editorRef: C.current,
                      _organizationId: e.project._organizationId
                  }) : null
              }
          }
          function O(t) {
              if (!c)
                  return null;
              var n = Object(F.isMilestoneEnabled)(e.project) ? o.a.createElement(m.TextButton, {
                  onClick: function() {
                      var n = e.scenarioFieldConfigs.find(function(e) {
                          return "milestone" === e.proTemplateConfigType
                      });
                      e.onTaskCreate({
                          _scenariofieldconfigId: n && n._id
                      }, t.prevSibling)
                  },
                  color: "blue"
              }, o.a.createElement(R.Icon, {
                  type: "plus"
              }), f.a.get("gantt.app.outline.add.milestone")) : null
                , a = o.a.createElement(m.TextButton, {
                  onClick: function() {
                      e.onTaskCreate({}, t.prevSibling)
                  },
                  color: "blue"
              }, o.a.createElement(R.Icon, {
                  type: "plus"
              }), f.a.get("gantt.app.outline.add.task"));
              return o.a.createElement("div", {
                  className: et.a.foot + " gantt-app-outline-foot"
              }, a, n)
          }
          var j = D.a.filter(e, function(e, t) {
              return "children" !== t
          })
            , _ = Object(r.useMemo)(function() {
              return {
                  rowKey: l,
                  columnKey: s,
                  renderHeadConfig: u,
                  renderHeadCell: p,
                  renderBodyRowMenu: b,
                  renderBodyRowToggler: g,
                  renderBodyRowHandle: v,
                  renderBodyCell: h,
                  renderFoot: O
              }
          }, Object(a.__spread)(j, [c, n]))
            , w = Object(r.useRef)(null)
            , E = Object(r.useMemo)(function() {
              return {
                  isMarkdownSupported: function(t) {
                      return Boolean(Object(y.isIndieTask)(t) || t.isAncestorAuthorized || e.project && Object(F.isAppEnabled)(e.project, "markdown"))
                  }
              }
          }, [e.project])
            , C = Object(r.useRef)(null);
          return o.a.createElement(x.c.Provider, {
              value: _
          }, o.a.createElement(it.c.Provider, {
              value: E
          }, o.a.createElement(ot.a, {
              organizationId: e.organizationId,
              projectId: e.project._id,
              tasks: void 0,
              fields: void 0
          }, o.a.createElement(ct.TableEditor, {
              ref: C,
              getEntityId: H.c,
              getFieldId: H.d
          }, o.a.createElement(o.a.Fragment, null, e.children)))), o.a.createElement(Te, {
              ref: w
          }))
      }
        , st = n("UDpBlSq3")
        , ut = n("IeOHO4zw")
        , dt = n("77NnVLwu")
        , pt = n.n(dt)
        , ft = n("wgY5hGF4")
        , mt = n.n(ft)
        , bt = n("xSjVTYm3")
        , gt = n.n(bt)
        , vt = function(e) {
          var t = e.visible
            , n = e.editInfo
            , i = e.onClose
            , c = e._projectId
            , l = Object(v.q)().searchersFilter$
            , s = Object(a.__read)(Object(r.useState)(""), 2)
            , u = s[0]
            , d = s[1]
            , p = Object(a.__read)(Object(r.useState)(!1), 2)
            , g = p[0]
            , h = p[1]
            , O = Object(k.c)(l);
          Object(r.useEffect)(function() {
              t && d(n ? n.title : mt()().format("YYYY-MM-DD HH:mm"))
          }, [t, n]);
          var y = Object(r.useMemo)(function() {
              var e = !u;
              return n ? {
                  children: f.a.get("gantt.baselineModal.edit.button"),
                  disabled: e,
                  loading: g
              } : {
                  children: f.a.get("gantt.baselineModal.create.button"),
                  disabled: e,
                  loading: g
              }
          }, [n, u, g])
            , _ = n ? f.a.get("gantt.baselineModal.edit.title") : f.a.get("gantt.baselineModal.create.title");
          return o.a.createElement(R.Dialog, {
              title: _,
              visible: t,
              onClose: i,
              okProps: y,
              afterClose: function() {
                  g && h(!1)
              },
              onCancel: i,
              height: "230px",
              onOk: function() {
                  h(!0),
                  (n ? Tt(n._id, u) : Nt(c, u, O.tql)).subscribe(function() {
                      m.Toast.success({
                          message: n ? f.a.get("gantt.baselineModal.edit.toast") : f.a.get("gantt.baselineModal.create.toast")
                      }),
                      b.gta.event({
                          action: (n ? "edited" : "created") + " baseline",
                          page: "gantt page"
                      }),
                      i()
                  }, function(e) {
                      h(!1),
                      Object(j.throwError)(e)
                  })
              }
          }, o.a.createElement("div", {
              className: gt.a["baseline-dialog-wrap"]
          }, o.a.createElement("div", {
              className: gt.a.field
          }, o.a.createElement("p", {
              className: gt.a.label
          }, f.a.get("gantt.baselineModal.input.name")), o.a.createElement(R.Input, {
              value: u,
              onChange: function(e) {
                  d(e)
              },
              maxLength: 20,
              className: gt.a.input
          }))))
      }
        , ht = n("6LYXogbb")
        , Ot = n.n(ht)
        , jt = n("FrKuMCqy")
        , yt = n.n(jt)
        , kt = R.Balloon.Tooltip
        , _t = function(e) {
          var t = e.baseline
            , n = e.onOpen
            , i = e.onDropdownVisible
            , c = e.canEdit
            , l = e.canDelete
            , s = Object(a.__read)(Object(r.useState)(!0), 2)
            , u = s[0]
            , d = s[1]
            , p = Object(v.q)().baseline$
            , g = o.a.createElement(Ot.a, {
              disableCssClamp: !0,
              className: yt.a.title,
              onClampEnd: function(e) {
                  d(!e.didClamp)
              },
              clamp: 1,
              ellipsis: "..."
          }, t.title)
            , h = u ? g : o.a.createElement(kt, {
              align: "t",
              trigger: g
          }, t.title)
            , O = (c || l) && o.a.createElement(wt, {
              onOpenEditModal: function() {
                  n(t)
              },
              onDeleteBaseline: function() {
                  Dt(t._id).subscribe(function() {
                      m.Toast.success({
                          message: f.a.get("gantt.baselineItem.delete")
                      }),
                      b.gta.event({
                          action: "deleted baseline",
                          page: "gantt page"
                      })
                  }, j.throwError)
              },
              baseline: t,
              canEdit: c,
              canDelete: l
          });
          return o.a.createElement("div", {
              onClick: function() {
                  p.next(t),
                  b.gta.event({
                      action: "compared baseline",
                      page: "gantt page"
                  }),
                  i(!1)
              },
              className: yt.a["baseline-item"]
          }, o.a.createElement("div", {
              className: yt.a.info
          }, h, o.a.createElement("p", {
              className: yt.a.time
          }, f.a.get("gantt.baselineItem.created", mt()(t.created).format("YYYY-MM-DD HH:mm")))), O)
      }
        , wt = function(e) {
          var t = e.onOpenEditModal
            , n = e.onDeleteBaseline
            , a = e.baseline
            , r = e.canEdit
            , i = e.canDelete
            , c = [{
              IconType: "pencil",
              title: f.a.get("gantt.baselineItem.popupMenu.edit"),
              onClick: t,
              hasPermission: r
          }, {
              IconType: "copy",
              title: f.a.get("gantt.baselineItem.popupMenu.copy"),
              hasPermission: !1
          }, {
              IconType: "share-stroke",
              title: f.a.get("gantt.baselineItem.popupMenu.new"),
              hasPermission: !1
          }, {
              IconType: "trashbin",
              title: f.a.get("gantt.baselineItem.popupMenu.delete"),
              goto: 1,
              hasPermission: i
          }]
            , l = o.a.createElement("div", {
              onClick: function(e) {
                  e.stopPropagation()
              }
          }, o.a.createElement(R.Icon, {
              className: yt.a.more,
              type: "more"
          }))
            , s = c.map(function(e) {
              if (!e.hasPermission)
                  return null;
              var t = o.a.createElement(o.a.Fragment, null, o.a.createElement(R.Icon, {
                  type: e.IconType
              }), e.title);
              return e.goto ? o.a.createElement(m.PopupMenuLink, {
                  key: e.IconType,
                  className: yt.a.item,
                  goto: e.goto
              }, t) : o.a.createElement("div", {
                  key: e.IconType,
                  onClick: e.onClick,
                  className: yt.a.item
              }, t)
          });
          return o.a.createElement(m.PopupMenu, {
              placement: "bottom",
              main: 0,
              trigger: l
          }, o.a.createElement(m.PopupMenuView, {
              className: yt.a["menu-view"],
              index: 0,
              title: f.a.get("gantt.baselineItem.popupMenu.setting")
          }, s), o.a.createElement(m.PopupMenuView, {
              className: yt.a["menu-view-delete"],
              index: 1,
              title: f.a.get("gantt.baselineItem.popupMenu.delete")
          }, f.a.get("gantt.baselineItem.popupMenu.delete.confirm", a.title), o.a.createElement(R.Button, {
              size: "small",
              onClick: n,
              className: yt.a["delete-button"],
              type: "primary",
              warning: !0
          }, f.a.get("gantt.baselineItem.popupMenu.delete.button"))))
      }
        , Et = n("VAwXehJg")
        , xt = n.n(Et)
        , Ct = function(e) {
          var t = e.baselines
            , n = e.onOpen
            , a = e.onDropdownVisible
            , r = e.canCreate
            , i = e.canEdit
            , c = e.canDelete
            , l = r && o.a.createElement(R.Button, {
              className: xt.a["create-baseline-button"],
              onClick: function() {
                  n()
              },
              type: "primary",
              text: !0
          }, o.a.createElement(R.Icon, {
              type: "plus"
          }), f.a.get("gantt.baselinelist.create"))
            , s = t.map(function(e) {
              return o.a.createElement(_t, {
                  key: e._id,
                  baseline: e,
                  onOpen: n,
                  onDropdownVisible: a,
                  canEdit: i,
                  canDelete: c
              })
          });
          return o.a.createElement(o.a.Fragment, null, l, s)
      }
        , It = n("4kGQRQn1")
        , St = n.n(It)
        , Mt = n("Rz8vyGAj").default
        , Nt = function(e, t, n) {
          var a = n ? {
              _projectId: e,
              title: t,
              filter: n
          } : {
              _projectId: e,
              title: t
          };
          return g.default.fetch.post("gantt/baselines", a)
      }
        , Tt = function(e, t) {
          var n = {
              _ganttBaselineId: e,
              title: t
          };
          return g.default.fetch.put("gantt/baselines", n)
      }
        , Dt = function(e) {
          var t = "gantt/baselines?_id=" + e;
          return g.default.fetch.delete(t)
      }
        , Rt = function(e) {
          var t = e.project
            , n = Object(a.__read)(Object(r.useState)(!1), 2)
            , i = n[0]
            , c = n[1]
            , l = Object(a.__read)(Object(r.useState)(!1), 2)
            , s = l[0]
            , u = l[1]
            , d = Object(a.__read)(Object(r.useState)(null), 2)
            , p = d[0]
            , m = d[1]
            , v = Object(a.__read)(Object(r.useState)([]), 2)
            , h = v[0]
            , O = v[1]
            , y = Object(r.useMemo)(function() {
              return t ? new pt.a(t,{
                  bindByMatrix: !1
              }) : void 0
          }, [t])
            , k = Object(r.useMemo)(function() {
              return !!y && y.getRoleScope() >= 1
          }, [y])
            , _ = Object(r.useMemo)(function() {
              return !!y && y.getRoleScope() >= 1
          }, [y])
            , w = Object(r.useMemo)(function() {
              return !!y && y.getRoleScope() >= 1
          }, [y]);
          Object(r.useEffect)(function() {
              var e;
              if (s)
                  return b.gta.event({
                      action: "opened baseline",
                      page: "gantt page"
                  }),
                  e = function(e) {
                      var t = {
                          _projectId: e._id,
                          pageSize: 99
                      };
                      return g.default.fetch.get("gantt/baselines", t)
                  }(t).subscribe(function(e) {
                      var t = e.result;
                      return O(t)
                  }, j.throwError),
                  function() {
                      return e && e.unsubscribe()
                  }
          }, [s, t]);
          var E = function(e) {
              e && m(e),
              c(!0),
              x(!1)
          }
            , x = function(e) {
              u(e)
          }
            , C = o.a.createElement("div", {
              className: St.a["baseline-filter"]
          }, o.a.createElement("span", {
              className: St.a["selected-label"]
          }, f.a.get("gantt.baselineFilter.trigger")), o.a.createElement(R.Icon, {
              type: "chevron-down-s"
          }))
            , I = h.length > 0 ? o.a.createElement(Ct, {
              canCreate: k,
              canEdit: _,
              canDelete: w,
              baselines: h,
              onOpen: E,
              onDropdownVisible: x
          }) : o.a.createElement(Ft, {
              canCreate: k,
              onOpen: E
          });
          return o.a.createElement(o.a.Fragment, null, o.a.createElement(vt, {
              editInfo: p,
              visible: i,
              onClose: function() {
                  p && m(null),
                  c(!1)
              },
              _projectId: t._id
          }), o.a.createElement(R.Dropdown, {
              visible: s,
              onVisibleChange: x,
              trigger: C,
              triggerType: "click"
          }, o.a.createElement("div", {
              className: St.a["baseline-wrap"]
          }, o.a.createElement("div", {
              className: St.a["baseline-tips"]
          }, f.a.get("gantt.baselineFilter.notice")), I)))
      }
        , Ft = function(e) {
          var t = e.onOpen
            , n = e.canCreate && o.a.createElement(R.Button, {
              onClick: function() {
                  t()
              },
              type: "primary"
          }, f.a.get("gantt.baselineFilter.placeholder.create"));
          return o.a.createElement("div", {
              className: St.a["baseline-placeholder-wrap"]
          }, o.a.createElement("svg", {
              className: St.a["baseline-placeholder"],
              "aria-hidden": "true"
          }, o.a.createElement("use", {
              xlinkHref: "#" + Mt.id
          })), o.a.createElement("p", null, f.a.get("gantt.baselineFilter.placeholder")), n)
      }
        , Pt = n("oDp7ehds")
        , Bt = n.n(Pt)
        , Lt = n("AlYVqoR6")
        , Vt = n.n(Lt)
        , $t = function(e) {
          return o.a.createElement(R.Balloon.Tooltip, {
              trigger: o.a.createElement(m.Icon, {
                  className: Vt.a.icon,
                  name: "info"
              }),
              popupClassName: Vt.a.popup
          }, o.a.createElement("div", {
              className: Vt.a.tip
          }, o.a.createElement("div", {
              className: Vt.a.image
          }, o.a.createElement("img", {
              src: e.image
          })), o.a.createElement("div", {
              className: Vt.a.text
          }, e.text)))
      }
        , At = n("HElSQS6v")
        , qt = Object(r.memo)(function() {
          var e = Object(v.q)()
            , t = e.setCriticalPathVisible
            , n = e.criticalPathVisible$
            , a = Object(k.c)(n);
          return o.a.createElement("div", {
              className: Bt.a["critical-path-switch"]
          }, o.a.createElement("div", {
              className: Bt.a.left
          }, o.a.createElement("span", {
              className: Bt.a.label
          }, f.a.get("gantt.criticalPath.name")), o.a.createElement($t, {
              image: At,
              text: f.a.get("gantt.criticalPath.tip")
          })), o.a.createElement(m.Switch, {
              size: "small",
              checked: a,
              onChange: function(e) {
                  t(e),
                  b.gta.event({
                      action: "switch CP",
                      page: "gantt page",
                      category: e ? "on" : "off"
                  })
              }
          }))
      })
        , zt = n("HDJEOtNh")
        , Ut = n("zkxgvHHN")
        , Xt = n.n(Ut)
        , Gt = n("9RKihit3")
        , Kt = function(e) {
          var t = e.onConfirm
            , n = function(e) {
              return function() {
                  t(e)
              }
          };
          return o.a.createElement("div", null, o.a.createElement("p", null, f.a.get("gantt.app.task.scheduling.content")), o.a.createElement(R.Button, {
              type: "primary",
              onClick: n(!0)
          }, f.a.get("gantt.app.task.scheduling.all")), o.a.createElement(R.Button, {
              onClick: n(!1)
          }, f.a.get("gantt.app.task.scheduling.new")))
      }
        , Ht = function(e) {
          var t = Object(a.__read)(Object(r.useState)(!1), 2)
            , n = t[0]
            , i = t[1]
            , c = Object(r.useMemo)(function() {
              return zt.ProjectAccess.hasAdminAuthority(e._projectId)
          }, [e._projectId])
            , l = function() {
              c && (e.autoTaskScheduling ? e.onChange(!e.autoTaskScheduling) : i(!0))
          }
            , s = Object(r.useCallback)(function(e) {
              i(e)
          }, [i])
            , u = e.autoTaskScheduling ? o.a.createElement(m.Switch, {
              size: "small",
              checked: e.autoTaskScheduling,
              onClick: l,
              disabled: !c
          }) : o.a.createElement(m.TitledDropdown, {
              title: f.a.get("gantt.app.task.scheduling.title"),
              content: o.a.createElement(Kt, {
                  onConfirm: function(t) {
                      e.onChange(!e.autoTaskScheduling, t),
                      i(!1)
                  }
              }),
              opened: n,
              onVisibleChange: s,
              className: Xt.a["dropdown-scheduling"],
              titleCls: Xt.a["dropdown-scheduling-title"],
              contentCls: Xt.a["dropdown-scheduling-content"]
          }, o.a.createElement(m.Switch, {
              size: "small",
              checked: e.autoTaskScheduling,
              onClick: l,
              disabled: !c
          }));
          return o.a.createElement(P.ErrorBoundary, {
              name: "auto-scheduler"
          }, o.a.createElement("div", {
              className: Xt.a["auto-scheduling"]
          }, o.a.createElement("div", {
              className: Xt.a["left-wrap"]
          }, o.a.createElement("span", {
              className: "" + Xt.a.text
          }, f.a.get("gantt.app.task.scheduling")), o.a.createElement($t, {
              image: Gt,
              text: f.a.get("gantt.app.task.scheduling.des")
          })), u))
      }
        , Wt = n("aZ+ghU91")
        , Yt = n("oPs7WnEA")
        , Jt = n("8zoxEjTT")
        , Qt = n("/LDIkT/T")
        , Zt = n.n(Qt)
        , en = function() {
          return o.a.createElement(R.Icon, {
              size: "small",
              type: "search",
              className: Zt.a["search-prefix"] + " search-icon"
          })
      }
        , tn = function(e) {
          return o.a.createElement("section", {
              className: Zt.a["search-input-section"]
          }, o.a.createElement(R.Input, {
              className: Zt.a["search-input"],
              size: "small",
              hasClear: !0,
              innerBefore: o.a.createElement(en, null),
              placeholder: f.a.get("scrum.panel.filter.text.input.placeholder"),
              value: e.value,
              onChange: e.onChange
          }))
      }
        , nn = n("l1F0k6M1")
        , an = n("TZ9VkvPh")
        , rn = n("79Xm+sqc")
        , on = n("eNR94hqE")
        , cn = n("L/msMPaN")
        , ln = n("SdndzpB1")
        , sn = n("T2s1rwmM")
        , un = n.n(sn)
        , dn = function(e) {
          return e.visible ? o.a.createElement(m.TextButton, {
              htmlType: "reset",
              color: "blue",
              onClick: e.onReset
          }, o.a.createElement(m.Icon, {
              name: "putback"
          }), f.a.get("filter.panel.footer.reset.handler")) : null
      }
        , pn = function(e) {
          var t = Object(v.q)().searchersFilter$
            , n = Object(k.c)(t)
            , i = Object(r.useMemo)(function() {
              return new nn.Subject
          }, [])
            , c = Object(r.useMemo)(function() {
              return new nn.Subject
          }, [])
            , l = Object(r.useMemo)(function() {
              return new nn.Subject
          }, [])
            , s = Object(r.useMemo)(function() {
              return new nn.Subject
          }, [])
            , u = Object(an.useFilterChangeByView)();
          Object(ln.j)(e.projectId, i, c, t),
          Object(ln.k)(e.projectId, l, s, t);
          var d = Object(r.useMemo)(function() {
              return {
                  getCustomfieldsSearchers: function() {
                      return i.next()
                  },
                  toggleDropdown: function(e) {
                      t.next(Object(a.__assign)(Object(a.__assign)({}, t.value), {
                          dropdownOpened: e
                      }))
                  },
                  showCustomfieldsSearcher: function(e) {
                      t.next(Object(a.__assign)(Object(a.__assign)({}, t.value), {
                          customfieldsSearchers: D.a.chain(t.value.customfieldsSearchers).concat([e]).uniq("id").value(),
                          showedSearchers: D.a.chain(t.value.showedSearchers).concat([e.id]).uniq().value()
                      }))
                  },
                  showSearcher: function(e) {
                      t.next(Object(a.__assign)(Object(a.__assign)({}, t.value), {
                          showedSearchers: t.value.showedSearchers.concat(e)
                      }))
                  },
                  changeInput: function(e) {
                      l.next(),
                      t.next(Object(a.__assign)(Object(a.__assign)({}, t.value), {
                          input: e,
                          isSearchLoading: !0,
                          customfieldsResult: []
                      }))
                  },
                  getCustomfieldsSearchersLoadMore: function() {
                      return c.next({})
                  },
                  searchCustomfieldsSearchersLoadMore: function() {
                      return s.next({})
                  }
              }
          }, [i, c, t, l, s]);
          return o.a.createElement(P.ErrorBoundary, {
              name: "task-filter-selector"
          }, o.a.createElement("footer", {
              className: un.a["filter-footer"]
          }, o.a.createElement(cn.a, Object(a.__assign)({}, d, {
              inSearch: n.input.trim().length > 0,
              schemaType: on.c.Task,
              isCustomSearcherShowed: rn.c(on.c.Task),
              projectId: e.projectId,
              searcherGroups: n.searcherGroups,
              showedSearchers: n.showedSearchers,
              invisibleSearcherIds: n.invisibleSearcherIds,
              input: n.input,
              dropdownOpened: n.dropdownOpened,
              filters: n.filters,
              hasMore: n.hasMore,
              isCustomFiltersLoading: n.isCustomFiltersLoading,
              customfieldsSearchers: n.customfieldsSearchers,
              searchHasMore: n.hasSearchMore,
              isSearchLoading: n.isSearchLoading,
              customfieldsResult: n.customfieldsResult,
              gta: ln.b
          })), o.a.createElement(dn, {
              visible: u,
              onReset: e.onReset
          })))
      }
        , fn = n("d0QK6Sy1")
        , mn = n("6Ukl4YYB")
        , bn = n.n(mn)
        , gn = function(e) {
          var t, n = Object(v.q)().searchersFilter$, i = Object(k.c)(n), c = i.searcherGroups, l = i.showedSearchers, s = i.customfieldsSearchers, u = i.tqlValues, d = i.filters, p = Object(r.useMemo)(function() {
              return Object(ln.f)(c, l, s)
          }, [c, l, s]);
          return o.a.createElement(P.ErrorBoundary, {
              name: "gantt-task-filter"
          }, o.a.createElement("section", {
              className: bn.a["searches-list"]
          }, p.map((t = Object(a.__assign)(Object(a.__assign)({}, e), {
              tqlValues: u,
              disabledSearcherIds: [],
              filters: d
          }),
          function(e) {
              return o.a.createElement(fn.a, Object(a.__assign)({}, e, {
                  key: e.id,
                  projectId: t.projectId,
                  filter: t.filters[e.id],
                  scopes: Object(ln.d)(t.tqlValues),
                  disabled: t.disabledSearcherIds.indexOf(e.id) >= 0,
                  inline: !0,
                  onChange: t.onChange,
                  onHideSearcher: t.onHideSearcher,
                  gta: ln.b
              }))
          }
          ))))
      }
        , vn = n("2yzd6eos")
        , hn = n.n(vn)
        , On = function(e) {
          return o.a.createElement("div", {
              className: hn.a["task-filter-selector-content"]
          }, o.a.createElement(tn, {
              value: e.searchInput,
              onChange: e.onSearchInputChange
          }), o.a.createElement(gn, {
              projectId: e.projectId,
              onChange: e.onSearcherUnitChange,
              onHideSearcher: e.onHideSearcher
          }), o.a.createElement(pn, {
              projectId: e.projectId,
              onReset: e.onReset
          }))
      }
        , jn = function(e) {
          var t = Object(v.q)()
            , n = t.searchersFilter$
            , i = t.customViewHasChanged$
            , c = t.customView$
            , l = Object(k.c)(n)
            , s = Object(k.c)(c)
            , u = Object(r.useCallback)(function(t) {
              e.onDropdownChange(t)
          }, [e])
            , d = Object(r.useCallback)(function() {
              Object(ln.i)(n).then(function(t) {
                  return e.onChange(t)
              }),
              i.next(!0)
          }, [i, n, e])
            , p = function(e) {
              n.next(Object(a.__assign)(Object(a.__assign)({}, n.value), {
                  searchInput: e
              })),
              d()
          }
            , f = function(e) {
              var t = Object.assign({}, l.filters, e)
                , r = Object(Yt.formatFiltersLinkage)(t, e)
                , o = Object(Yt.getTqlValuesByFilters)(r);
              n.next(Object(a.__assign)(Object(a.__assign)({}, n.value), {
                  filters: r,
                  tqlValues: o
              })),
              d()
          }
            , b = function(e) {
              n.next(Object(a.__assign)(Object(a.__assign)({}, n.value), {
                  showedSearchers: n.value.showedSearchers.filter(function(t) {
                      return t !== e
                  })
              })),
              d()
          }
            , g = function() {
              Jt.a.clear(),
              s ? n.next(Object(a.__assign)(Object(a.__assign)({}, n.value), {
                  searchInput: s.searchersFilter.searchInput,
                  filters: s.searchersFilter.filters,
                  tqlValues: Object(Yt.getTqlValuesByFilters)(s.searchersFilter.filters),
                  showedSearchers: s.searchersFilter.showedSearchers
              })) : n.next(Object(a.__assign)(Object(a.__assign)({}, n.value), {
                  searchInput: ln.c.searchInput,
                  filters: ln.c.filters,
                  tqlValues: Object(Yt.getTqlValuesByFilters)(ln.c.filters),
                  showedSearchers: ln.c.showedSearchers
              })),
              d()
          }
            , h = Object(r.useMemo)(function() {
              return {
                  projectId: e.projectId,
                  searchInput: l.searchInput,
                  onSearchInputChange: p,
                  onSearcherUnitChange: f,
                  onHideSearcher: b,
                  onReset: g
              }
          }, [l]);
          return o.a.createElement(P.ErrorBoundary, {
              name: "gantt-task-filter-selector"
          }, o.a.createElement(m.Dropdown, {
              content: o.a.createElement(On, Object(a.__assign)({}, h)),
              persistence: !0,
              placement: "bottom-end",
              opened: e.opened,
              onVisibleChange: u
          }, e.trigger))
      }
        , yn = n("nnm9C2jF")
        , kn = n.n(yn)
        , _n = n("LCxrq/2D")
        , wn = n.n(_n)
        , En = function(e) {
          var t, n = e.onClick, a = void 0 === n ? kn.a : n, r = e.active, i = Object(an.useFilterChangeByView)(), c = d()(wn.a["task-filter-trigger"], ((t = {})[wn.a.active] = r,
          t[wn.a.badge] = i,
          t));
          return o.a.createElement("div", {
              className: c,
              onClick: a
          }, o.a.createElement("span", {
              className: wn.a.text
          }, f.a.get("filter")), o.a.createElement(R.Icon, {
              type: "chevron-down-s"
          }))
      }
        , xn = n("uRV6oCrj")
        , Cn = n.n(xn)
        , In = n("MRWt5Q5L")
        , Sn = n.n(In)
        , Mn = n("/WVshr7z")
        , Nn = n.n(Mn)
        , Tn = n("Jeu4Gpbg")
        , Dn = n.n(Tn)
        , Rn = n("ygmm7GRm")
        , Fn = n.n(Rn)
        , Pn = n("zQT/Em5X")
        , Bn = n.n(Pn)
        , Ln = n("XQtZkpax")
        , Vn = n.n(Ln)
        , $n = n("vLerj38T")
        , An = n.n($n)
        , qn = n("Zhgf5jCo")
        , zn = n.n(qn)
        , Un = [{
          description: f.a.get("gantt.legend.doing"),
          img: Cn.a
      }, {
          description: f.a.get("gantt.legend.done"),
          img: Sn.a
      }, {
          description: f.a.get("gantt.legend.overdue"),
          img: Nn.a
      }, {
          description: f.a.get("gantt.legend.father"),
          img: Dn.a
      }, {
          description: f.a.get("gantt.legend.group"),
          img: Fn.a
      }, {
          description: f.a.get("gantt.legend.point"),
          img: Vn.a
      }, {
          description: f.a.get("gantt.legend.milestone"),
          img: Bn.a
      }, {
          description: f.a.get("gantt.legend.baseline"),
          img: An.a
      }]
        , Xn = function() {
          var e = o.a.createElement("div", {
              className: zn.a["legend-trigger"]
          }, o.a.createElement(R.Icon, {
              type: "question-o"
          }))
            , t = Un.map(function(e, t) {
              return o.a.createElement("div", {
                  key: t,
                  className: zn.a["legend-item"]
              }, o.a.createElement("div", {
                  className: zn.a.legend
              }, o.a.createElement("img", {
                  src: e.img
              })), o.a.createElement("div", {
                  className: zn.a.description
              }, e.description))
          });
          return o.a.createElement(R.Dropdown, {
              align: "tr bl",
              onOpen: function() {
                  b.gta.event({
                      action: "opened signs",
                      page: "gantt page"
                  })
              },
              triggerType: "hover",
              trigger: e
          }, o.a.createElement("div", {
              className: zn.a.wrap
          }, o.a.createElement("div", {
              className: zn.a["wrap-header"]
          }, f.a.get("gantt.legend")), o.a.createElement("div", {
              className: zn.a["wrap-legends"]
          }, t), o.a.createElement("a", {
              onClick: function() {
                  b.gta.event({
                      action: "opened help",
                      page: "gantt page",
                      category: "signs"
                  })
              },
              href: Fa,
              target: "_blank",
              className: zn.a["wrap-help"]
          }, o.a.createElement(R.Icon, {
              type: "question-o"
          }), f.a.get("gantt.legend.help"))))
      }
        , Gn = n("qezpkcKe")
        , Kn = n("Z56NkBRy")
        , Hn = n("CkVoujSO")
        , Wn = n.n(Hn)
        , Yn = n("XLkkrFET")
        , Jn = n.n(Yn)
        , Qn = n("879ThKh/")
        , Zn = n("P7lboi1v")
        , ea = n("ln9RsXX9")
        , ta = n("NtzEC3Pa")
        , na = function() {
          var e = Object(a.__read)(Object(r.useState)(null), 2)
            , t = e[0]
            , n = e[1]
            , o = Object(ut.c)()
            , i = Object(ut.b)()
            , c = Object(r.useMemo)(function() {
              var e = o.find(function(e) {
                  return e._id === i
              });
              if (!e)
                  return !1;
              var t = Zn.Payment.create(e.plan);
              return !!ea.Version.isEnterprisePro(t)
          }, [i, o]);
          Object(r.useEffect)(function() {
              if (!c) {
                  var e = g.default.fetch.get("gantt/preferences", {
                      boundToObjectType: "organization",
                      _boundToObjectId: i
                  }).pipe(Object(Qn.tap)(function(e) {
                      return n(null == e ? void 0 : e.remainingTimeStamp)
                  })).subscribe({
                      error: j.throwError
                  });
                  return function() {
                      return e.unsubscribe()
                  }
              }
          }, [i, c]);
          var l = Object(r.useMemo)(function() {
              return Object(ea.paywallUrl)(Zn.PlanType.Wildcard, ta.FeatureType.UpgradeToPro, i)
          }, [i]);
          return {
              isEnterprisePro: c,
              payProtocol: l,
              remainingTrialTime: t
          }
      }
        , aa = function() {
          var e = na()
            , t = e.payProtocol
            , n = e.isEnterprisePro
            , a = e.remainingTrialTime;
          if (n || !a)
              return null;
          var r = a > 0
            , i = Math.ceil(a / 864e5);
          return r ? o.a.createElement("div", {
              className: Jn.a["trial-tip"]
          }, f.a.get("gantt.view.trial.remain", i), o.a.createElement(R.Button, {
              "data-pay": t
          }, f.a.get("gantt.view.trial.upgrade"))) : null
      }
        , ra = n("v1nHPqK0")
        , oa = n.n(ra)
        , ia = n("IMo0WtFo")
        , ca = n.n(ia)
        , la = function(e) {
          return Object(r.useEffect)(function() {
              b.gta.event({
                  action: "show upgrade popup",
                  page: "gantt page"
              })
          }, []),
          o.a.createElement("div", {
              className: oa.a["gantt-trial-mask"]
          }, o.a.createElement("div", {
              className: oa.a["trial-dialog"]
          }, o.a.createElement("img", {
              className: oa.a["trial-img"],
              src: ca.a
          }), o.a.createElement("p", {
              className: oa.a["trial-title"]
          }, " ", f.a.get("gantt.view.trial.end"), " "), o.a.createElement("p", {
              className: oa.a["trial-des"]
          }, " ", f.a.get("gantt.view.trial.upgrade.description"), " "), o.a.createElement(R.Button, {
              type: "primary",
              "data-pay": e.payProtocol,
              className: oa.a["trial-upgrade"]
          }, f.a.get("gantt.view.trial.upgrade"))))
      }
        , sa = n("jy/pKeSr")
        , ua = n("oAQ2rwGq")
        , da = n.n(ua)
        , pa = function(e, t) {
          var n = "projects/" + e._id + "/smartgroups";
          return g.default.fetch.post(n, t)
      }
        , fa = function(e, t) {
          var n = "smartgroups/" + e;
          return g.default.fetch.put(n, t)
      }
        , ma = function(e, t, n, r) {
          Jt.a.clear(),
          Object(ln.g)(r, e._id).pipe(Object(Qn.tap)(function(r) {
              var o = JSON.parse(e.view.searchersFilter)
                , i = {
                  _id: e._id,
                  name: e.name,
                  visible: e.visible,
                  sortBy: e.view.sortBy,
                  columns: e.view.columns,
                  groupBySelectOption: e.view.groupBySelectOption,
                  searchersFilter: Object(a.__assign)(Object(a.__assign)({}, o), r)
              };
              t.next(i),
              n.next(!1)
          }, j.throwError)).subscribe()
      }
        , ba = function(e) {
          var t = e.project
            , n = e.currentView
            , i = Object(v.q)()
            , l = i.sortBy$
            , s = i.searchersFilter$
            , u = i.customViewHasChanged$
            , d = i.customView$
            , p = Object(a.__read)(Object(r.useState)(!1), 2)
            , b = p[0]
            , g = p[1]
            , h = Object(k.c)(l)
            , O = Object(k.c)(s)
            , j = Object(k.c)(u)
            , y = Object(k.c)(d)
            , _ = Object(r.useCallback)(function(e, a, r, o) {
              var i = {
                  name: e,
                  visible: "project" === a ? ["project:" + t._id] : void 0,
                  view: {
                      sortBy: h,
                      searchersFilter: JSON.stringify(O),
                      groupBySelectOption: n.groupBySelectOption,
                      columns: n.columns
                  },
                  type: "gantt.custom"
              };
              pa(t, i).pipe(Object(c.delayWhen)(function(e) {
                  return Object(ln.h)(e)
              }), Object(Qn.tap)(function(e) {
                  ma(e, d, u, t),
                  R.Toast.success({
                      title: f.a.get("custom.view.save.success")
                  }),
                  r && r()
              }, o)).subscribe()
          }, [n, t, d, u, O, h])
            , w = Object(r.useCallback)(function() {
              return o.a.createElement(sa.a, {
                  editMode: "create",
                  name: "",
                  hasProjectVisibleViewPerm: !0,
                  modalOpened: b,
                  onModalVisibleChange: E,
                  onSave: _
              })
          }, [b, _])
            , E = function(e) {
              g(e)
          }
            , x = function() {
              E(!0)
          }
            , C = function() {
              var e = {
                  name: n.name,
                  visible: n.visible,
                  view: {
                      sortBy: h,
                      searchersFilter: JSON.stringify(O),
                      groupBySelectOption: n.groupBySelectOption,
                      columns: n.columns
                  },
                  type: "gantt.custom"
              };
              fa(n._id, e).pipe(Object(c.delayWhen)(function(e) {
                  return Object(ln.h)(e)
              }), Object(Qn.tap)(function(e) {
                  ma(e, d, u, t),
                  R.Toast.success({
                      title: f.a.get("custom.view.cover.success")
                  })
              })).subscribe()
          };
          if (!j)
              return null;
          if (y) {
              var I = o.a.createElement(m.Menu, null, o.a.createElement(m.MenuItem, {
                  onClick: x
              }, f.a.get("filter.panel.footer.save.new")), o.a.createElement(m.MenuItem, {
                  onClick: function() {
                      var e = n.visible && -1 !== n.visible[0].indexOf("project")
                        , t = e ? f.a.get("custom.view.project.visible.save.confirm.title") : f.a.get("custom.view.save.confirm.title")
                        , a = e ? f.a.get("custom.view.project.visible.save.confirm.content") : f.a.get("custom.view.save.confirm.content", n.name);
                      m.Alert.warning({
                          title: t,
                          content: a,
                          confirmText: f.a.get("custom.view.save.confirm.override"),
                          cancelText: f.a.get("cancel"),
                          onConfirm: C
                      })
                  }
              }, f.a.get("filter.panel.footer.save.update")));
              return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.Dropdown, {
                  placement: "bottom-start",
                  content: I
              }, o.a.createElement(R.Button, {
                  size: "xs",
                  className: da.a["save-custom-button"]
              }, f.a.get("filter.panel.footer.save.button"))), w())
          }
          return o.a.createElement(o.a.Fragment, null, o.a.createElement(R.Button, {
              onClick: x,
              size: "xs",
              className: da.a["save-custom-button"]
          }, f.a.get("filter.panel.footer.save.button")), w())
      }
        , ga = n("ND7ooQfY")
        , va = n.n(ga)
        , ha = n("UlS0Tu8f")
        , Oa = n("NAwW6wWx")
        , ja = n.n(Oa)
        , ya = R.Balloon.Tooltip
        , ka = function(e) {
          var t, n = e.ganttView, i = e.onOpen, c = e.onDropdownVisible, l = e.project, s = Object(a.__read)(Object(r.useState)(!0), 2), u = s[0], p = s[1], b = Object(v.q)(), h = b.customView$, O = b.customViewHasChanged$, y = Object(k.c)(h), _ = o.a.createElement(Ot.a, {
              disableCssClamp: !0,
              className: ja.a.title,
              onClampEnd: function(e) {
                  p(!e.didClamp)
              },
              clamp: 1,
              ellipsis: "..."
          }, n.name), w = u ? _ : o.a.createElement(ya, {
              align: "t",
              trigger: _
          }, n.name), E = Object(ha.isProjectVisible)(n) && o.a.createElement("div", {
              className: ja.a.badge
          }, f.a.get("custom.views.project.visibility"));
          return o.a.createElement("div", {
              onClick: function() {
                  ma(n, h, O, l),
                  c(!1)
              },
              className: d()(ja.a["gantt-view-item"], (t = {},
              t[ja.a.active] = y && y._id === n._id,
              t))
          }, o.a.createElement(R.Icon, {
              className: ja.a.icon,
              type: "column"
          }), w, E, o.a.createElement(_a, {
              onOpenEditModal: function() {
                  i(n)
              },
              onDeleteGanttView: function() {
                  var e, t;
                  (e = n._id,
                  t = "smartgroups/" + e,
                  g.default.fetch.delete(t)).subscribe(function() {
                      n._id === (null == y ? void 0 : y._id) && h.next(null),
                      m.Toast.success({
                          message: f.a.get("gantt.view.delete")
                      })
                  }, j.throwError)
              },
              ganttView: n
          }))
      }
        , _a = function(e) {
          var t = e.onOpenEditModal
            , n = e.onDeleteGanttView
            , a = e.ganttView
            , r = [{
              IconType: "pencil",
              title: Object(ha.isProjectVisible)(a) ? f.a.get("custom.views.edit.project.visible.view") : f.a.get("custom.views.edit"),
              onClick: t
          }, {
              IconType: "trashbin",
              title: Object(ha.isProjectVisible)(a) ? f.a.get("custom.views.delete.project.visible.view") : f.a.get("custom.views.delete"),
              goto: 1
          }]
            , i = o.a.createElement("div", {
              onClick: function(e) {
                  e.stopPropagation()
              }
          }, o.a.createElement(R.Icon, {
              className: ja.a.more,
              type: "more"
          }))
            , c = r.map(function(e) {
              var t = o.a.createElement(o.a.Fragment, null, o.a.createElement(R.Icon, {
                  type: e.IconType
              }), e.title);
              return e.goto ? o.a.createElement(m.PopupMenuLink, {
                  key: e.IconType,
                  className: ja.a.item,
                  goto: e.goto
              }, t) : o.a.createElement("div", {
                  key: e.IconType,
                  onClick: e.onClick,
                  className: ja.a.item
              }, t)
          });
          return o.a.createElement(m.PopupMenu, {
              placement: "bottom",
              main: 0,
              trigger: i
          }, o.a.createElement(m.PopupMenuView, {
              className: ja.a["menu-view"],
              index: 0,
              title: f.a.get("gantt.view.popupMenu.setting")
          }, c), o.a.createElement(m.PopupMenuView, {
              className: ja.a["menu-view-delete"],
              index: 1,
              title: f.a.get("gantt.view.popupMenu.delete")
          }, f.a.get("gantt.view.popupMenu.delete.confirm", a.name), o.a.createElement(R.Button, {
              size: "small",
              onClick: n,
              className: ja.a["delete-button"],
              type: "primary",
              warning: !0
          }, f.a.get("delete"))))
      }
        , wa = function(e) {
          var t, n = e.ganttViews, a = e.onOpen, r = e.onDropdownVisible, i = e.project, c = Object(v.q)(), l = c.customView$, s = c.customViewHasChanged$, u = Object(k.c)(l), p = n.map(function(e) {
              return o.a.createElement(ka, {
                  project: i,
                  key: e._id,
                  ganttView: e,
                  onOpen: a,
                  onDropdownVisible: r
              })
          }), m = n.length > 0 && o.a.createElement("div", {
              onClick: function() {
                  l.next(null),
                  s.next(!1),
                  r(!1)
              },
              className: d()(va.a["gantt-view-item"], (t = {},
              t[va.a.active] = !u,
              t))
          }, o.a.createElement(R.Icon, {
              className: va.a.icon,
              type: "unordered-list"
          }), f.a.get("gantt.majorFilter.all"));
          return o.a.createElement(o.a.Fragment, null, o.a.createElement(R.Button, {
              className: va.a["create-gantt-view-button"],
              onClick: function() {
                  a()
              },
              type: "primary",
              text: !0
          }, o.a.createElement(R.Icon, {
              type: "plus"
          }), f.a.get("gantt.view.create")), m, p)
      }
        , Ea = n("0Ww+EVLF")
        , xa = n.n(Ea)
        , Ca = n("9nsxlSTA").default
        , Ia = function(e) {
          var t = e.project
            , n = e.currentView
            , i = Object(v.q)()
            , l = i.sortBy$
            , s = i.searchersFilter$
            , u = i.customViewHasChanged$
            , d = i.customView$
            , p = Object(a.__read)(Object(r.useState)([]), 2)
            , m = p[0]
            , b = p[1]
            , h = Object(a.__read)(Object(r.useState)(null), 2)
            , O = h[0]
            , y = h[1]
            , _ = Object(a.__read)(Object(r.useState)(!1), 2)
            , w = _[0]
            , E = _[1]
            , x = Object(a.__read)(Object(r.useState)(!1), 2)
            , C = x[0]
            , I = x[1]
            , S = Object(k.c)(l)
            , M = Object(k.c)(s)
            , N = Object(k.c)(d)
            , T = Object(r.useCallback)(function(e, a, r, o) {
              var i = {
                  name: e,
                  visible: "project" === a ? ["project:" + t._id] : void 0,
                  view: {
                      sortBy: S,
                      searchersFilter: JSON.stringify(M),
                      groupBySelectOption: n.groupBySelectOption,
                      columns: n.columns
                  },
                  type: "gantt.custom"
              };
              O ? fa(O._id, i).pipe(Object(c.tap)(function() {
                  R.Toast.success({
                      title: f.a.get("custom.view.save.success")
                  }),
                  r && r()
              }, o)).subscribe() : pa(t, i).pipe(Object(c.delayWhen)(function(e) {
                  return Object(ln.h)(e)
              }), Object(c.tap)(function(e) {
                  ma(e, d, u, t),
                  R.Toast.success({
                      title: f.a.get("custom.view.save.success")
                  }),
                  r && r()
              }, o)).subscribe()
          }, [n, t, d, u, M, S, O])
            , D = Object(r.useCallback)(function() {
              var e = {
                  editMode: "create",
                  name: "",
                  hasProjectVisibleViewPerm: !0
              };
              return O && (e.editMode = "edit",
              e.name = O.name,
              e.hasProjectVisibleViewPerm = Object(ha.isProjectVisible)(O)),
              o.a.createElement(sa.a, {
                  editMode: e.editMode,
                  name: e.name,
                  hasProjectVisibleViewPerm: e.hasProjectVisibleViewPerm,
                  modalOpened: C,
                  onModalVisibleChange: P,
                  onSave: T
              })
          }, [C, O, T]);
          Object(r.useEffect)(function() {
              var e;
              if (w)
                  return e = function(e) {
                      var t = "projects/" + e._id + "/smartgroups";
                      return g.default.fetch.get(t, {
                          type: "gantt.custom"
                      })
                  }(t).subscribe(function(e) {
                      return b(e)
                  }, j.throwError),
                  function() {
                      return e && e.unsubscribe()
                  }
          }, [w, t]);
          var F = function(e) {
              y(e || null),
              P(!0),
              B(!1)
          }
            , P = function(e) {
              I(e)
          }
            , B = function(e) {
              E(e)
          }
            , L = N ? o.a.createElement("div", {
              className: xa.a["gantt-view"]
          }, o.a.createElement(R.Badge, {
              dot: !0
          }, o.a.createElement("span", {
              className: xa.a["selected-label"]
          }, f.a.get("custom.views"))), D(), o.a.createElement(R.Icon, {
              type: "chevron-down-s"
          })) : o.a.createElement("div", {
              className: xa.a["gantt-view"]
          }, o.a.createElement("span", {
              className: xa.a["selected-label"]
          }, f.a.get("custom.views")), D(), o.a.createElement(R.Icon, {
              type: "chevron-down-s"
          }))
            , V = m.length > 0 ? o.a.createElement(wa, {
              project: t,
              ganttViews: m,
              onOpen: F,
              onDropdownVisible: B
          }) : o.a.createElement(Sa, {
              onOpen: F
          });
          return o.a.createElement(R.Dropdown, {
              visible: w,
              onVisibleChange: B,
              trigger: L,
              triggerType: "click",
              triggerClickKeycode: -1
          }, o.a.createElement("div", {
              className: xa.a["gantt-view-wrap"]
          }, o.a.createElement("div", {
              className: xa.a["gantt-view-tips"]
          }, f.a.get("gantt.view.notice")), V))
      }
        , Sa = function(e) {
          var t = e.onOpen;
          return o.a.createElement("div", {
              className: xa.a["gantt-view-placeholder-wrap"]
          }, o.a.createElement("svg", {
              className: xa.a["gantt-view-placeholder"],
              "aria-hidden": "true"
          }, o.a.createElement("use", {
              xlinkHref: "#" + Ca.id
          })), o.a.createElement("p", null, f.a.get("gantt.view.placeholder")), o.a.createElement(R.Button, {
              onClick: function() {
                  t()
              },
              type: "primary"
          }, f.a.get("gantt.baselineFilter.placeholder.create")))
      }
        , Ma = n("yXOeq1bj")
        , Na = n.n(Ma)
        , Ta = n("pTYp/6Pi")
        , Da = function(e) {
          return new Promise(function(t, n) {
              var a;
              (a = e,
              new Promise(function(e, t) {
                  -1 !== a.indexOf("blob") && e(a);
                  var n = new XMLHttpRequest;
                  n.open("GET", a, !0),
                  n.responseType = "blob",
                  n.onload = function() {
                      200 === n.status && e(URL.createObjectURL(n.response))
                  }
                  ,
                  n.onerror = t,
                  n.send()
              }
              )).then(function(e) {
                  var a = new Image;
                  a.onload = function() {
                      t(a)
                  }
                  ,
                  a.onerror = n,
                  a.src = e
              })
          }
          )
      }
        , Ra = function(e, t) {
          return void 0 === t && (t = "teambition.png"),
          new Promise(function(n) {
              e.toBlob(function(e) {
                  var a = URL.createObjectURL(e)
                    , r = document.createElement("a");
                  r.href = a,
                  r.download = t,
                  r.click(),
                  URL.revokeObjectURL(a),
                  n()
              })
          }
          )
      };
      var Fa = "https://support.teambition.com/help/docs/5e7c56929bcd95001ad6a99d"
        , Pa = [{
          key: Wt.a.loose,
          get name() {
              return f.a.get("gantt.view.mode.loose")
          },
          get des() {
              return f.a.get("gantt.view.mode.display.des", "15~20")
          },
          image: n("06EqRv5a"),
          activeImage: n("tNObh+Zv")
      }, {
          key: Wt.a.compact,
          get name() {
              return f.a.get("gantt.view.mode.compact")
          },
          get des() {
              return f.a.get("gantt.view.mode.display.des", "25~30")
          },
          image: n("7tIMhIWn"),
          activeImage: n("BkDArZAd")
      }]
        , Ba = function(e) {
          var t = Object(a.__read)(Object(r.useState)(!1), 2)
            , n = t[0]
            , i = t[1]
            , l = Object(a.__read)(Object(r.useState)(Wt.a.compact), 2)
            , s = l[0]
            , u = l[1]
            , p = Object(v.q)()
            , g = p.viewDisplayMode$
            , h = p.pxPerRow$
            , O = p.updateViewDisplayMode
            , y = function() {
              var e = Object(v.q)()
                , t = e.chartScrollLeft$
                , n = e.scrollTop$
                , o = e.pxPerMs$
                , i = e.calendar$
                , c = e.outlineSize$
                , l = e.totalHeight$
                , s = e.chartSize$
                , u = e.mainRef$
                , d = e.isScreenshoting$
                , p = e.project$
                , b = e.scrollTo
                , g = e.commitWidth
                , h = e.commitHeight
                , O = e.getView
                , j = Object(k.c)(p)
                , y = Object(k.c)(l, function(e, t) {
                  return e === t
              })
                , _ = Object(r.useMemo)(function() {
                  return 56 + y
              }, [y]);
              return {
                  handleExportImage: function() {
                      d.next(!0);
                      var e = document.getElementById("gantt-body")
                        , r = document.querySelector(".gantt-app-view")
                        , l = O();
                      if (l && u.value && e && r && j) {
                          var p = {
                              scrollLeft: t.value,
                              scrollTop: n.value
                          }
                            , y = l.doc.tasks.reduce(function(e, t) {
                              if (t.start && t.end) {
                                  var n = t.start.valueOf()
                                    , a = t.end.valueOf();
                                  n < e.start && (e.start = n),
                                  a > e.end && (e.end = a)
                              }
                              return e
                          }, {
                              start: 1 / 0,
                              end: 0
                          })
                            , k = y.start
                            , w = y.end
                            , E = Object(v.m)(w, o.value, i.value) - Object(v.m)(k, o.value, i.value) + 50 + 200
                            , x = c.value.width + E;
                          if (x > 5e3 || _ > 12e3)
                              m.Toast.error({
                                  message: f.a.get("gantt.app.export.failed")
                              });
                          else {
                              m.Toast.success({
                                  message: f.a.get("gantt.app.export.start")
                              });
                              var C = Object(v.m)(k, o.value, i.value);
                              u.value.scrollTop = 0,
                              r.setAttribute("style", "bottom: unset; height:" + (46 + _) + "px"),
                              e.setAttribute("style", "width: " + x + "px;height: " + _ + "px"),
                              b(C - 50),
                              s.next({
                                  width: E,
                                  height: _
                              }),
                              g(x),
                              h(_),
                              setTimeout(function() {
                                  Na()(e, {
                                      useCORS: !0
                                  }).then(function(t) {
                                      t.toBlob(function(n) {
                                          var o = [URL.createObjectURL(n), Ta]
                                            , i = document.createElement("canvas")
                                            , c = i.getContext("2d");
                                          i.width = t.width + 40,
                                          i.height = t.height + 20 + 53,
                                          c && Promise.all(o.map(function(e) {
                                              return Da(e)
                                          })).then(function(t) {
                                              var n = Object(a.__read)(t, 2)
                                                , o = n[0]
                                                , l = n[1];
                                              c.fillStyle = "#F7F7F7",
                                              c.fillRect(0, 0, i.width, i.height),
                                              c.fillStyle = "#ababab",
                                              c.font = "500 15px PingFangSC";
                                              var s = f.a.get("gantt.app.export", mt()().format("YYYY.MM.DD hh:mm:ss"))
                                                , m = c.measureText(s).width;
                                              c.fillText(s, i.width - m - 20, 36),
                                              c.drawImage(l, 20, 20),
                                              c.drawImage(o, 20, 53);
                                              var g = f.a.get("gantt.app.export.image.name", j.name, mt()().format("MMDD"));
                                              Ra(i, g).then(function() {
                                                  r.removeAttribute("style"),
                                                  e.removeAttribute("style"),
                                                  u.value.scrollTop = p.scrollTop,
                                                  b(p.scrollLeft),
                                                  d.next(!1)
                                              })
                                          })
                                      })
                                  })
                              }, 200)
                          }
                      }
                  }
              }
          }().handleExportImage;
          Object(r.useEffect)(function() {
              var e = N.f.get("view.display.mode") || Wt.a.compact;
              u(e),
              g.next(e),
              h.next(e === Wt.a.loose ? Kn.f : Kn.e)
          }, [g, h]);
          var _, w = Object(r.useCallback)(function(t, n) {
              if (e.ganttPreferences) {
                  var r = {
                      _id: e.ganttPreferences._id,
                      autoTaskScheduling: t,
                      effectImmediate: void 0
                  };
                  t && n && (r.effectImmediate = n),
                  Object(S.e)(r).pipe(Object(c.throttleTime)(1e3), Object(c.tap)(function() {
                      return e.onGanttPreferencesChange(Object(a.__assign)(Object(a.__assign)({}, e.ganttPreferences), {
                          autoTaskScheduling: t
                      }))
                  }), Object(c.tap)(function() {
                      b.gta.event({
                          action: "switch auto pairing",
                          page: "gantt page",
                          category: t ? "on" : "off"
                      })
                  })).subscribe({
                      error: j.throwError
                  })
              }
          }, [e]), E = Object(r.useCallback)(function() {
              i(!0)
          }, [i]), x = Object(r.useCallback)(function() {
              window.open(Fa),
              b.gta.event({
                  action: "opened help",
                  page: "gantt page",
                  category: "more"
              })
          }, []), C = Object(r.useCallback)(function() {
              i(!1)
          }, [i]), I = Object(r.useCallback)(function(e) {
              return function() {
                  u(e)
              }
          }, [u]), M = Object(r.useCallback)(function() {
              var e;
              i(!1),
              e = s,
              N.f.set("view.display.mode", e),
              g.next(s),
              h.next(s === Wt.a.loose ? Kn.f : Kn.e),
              O(),
              b.gta.event({
                  action: "switched view",
                  page: "gantt page",
                  type: s === Wt.a.loose ? "loose" : "tight"
              })
          }, [s, g, h, O]);
          return o.a.createElement("div", {
              className: Wn.a.head
          }, o.a.createElement("div", {
              className: Wn.a.left
          }, o.a.createElement(st.GroupBySelect, Object(a.__assign)({}, e.groupBySelectProps)), e.project ? o.a.createElement(P.ErrorBoundary, {
              name: "gantt-baseline"
          }, o.a.createElement(Rt, {
              project: e.project
          })) : null, e.project ? o.a.createElement(P.ErrorBoundary, {
              name: "gantt-view"
          }, o.a.createElement(Ia, {
              project: e.project,
              currentView: e.currentView,
              onTaskFilterChange: e.onTaskFilterChange
          })) : null), o.a.createElement("div", {
              className: Wn.a.right
          }, e.project ? o.a.createElement(P.ErrorBoundary, {
              name: "gantt-save"
          }, o.a.createElement(ba, {
              project: e.project,
              currentView: e.currentView,
              onTaskFilterChange: e.onTaskFilterChange
          })) : null, o.a.createElement(aa, null), o.a.createElement(qt, null), function() {
              if (e.project)
                  return o.a.createElement(Ht, {
                      _projectId: e.project._id,
                      autoTaskScheduling: !!e.ganttPreferences && e.ganttPreferences.autoTaskScheduling,
                      onChange: w
                  })
          }(), o.a.createElement(jn, {
              trigger: o.a.createElement(En, {
                  active: e.taskFilterActive.value
              }),
              projectId: e._projectId,
              onChange: e.onTaskFilterChange,
              opened: e.taskFilterActive.value,
              onDropdownChange: e.taskFilterActive.onChange
          }), o.a.createElement(Xn, null), (_ = [o.a.createElement(R.Menu.Item, {
              key: "activity.panel.menu.view.density",
              className: Wn.a["menu-item"],
              onClick: E,
              "data-once-click": !0
          }, o.a.createElement(m.Icon, {
              name: "cog"
          }), f.a.get("activity.panel.menu.view.density")), o.a.createElement(R.Menu.Item, {
              key: "activity.panel.menu.help",
              className: Wn.a["menu-item"],
              onClick: x,
              "data-once-click": !0
          }, o.a.createElement(m.Icon, {
              name: "circle-question"
          }), f.a.get("activity.panel.menu.help"))],
          Object(q.isIE)() || _.push.apply(_, Object(a.__spread)([o.a.createElement(R.Menu.Item, {
              key: "activity.panel.menu.png.import",
              className: Wn.a["menu-item"],
              onClick: y,
              "data-once-click": !0
          }, o.a.createElement(m.Icon, {
              name: "arrow-share"
          }), f.a.get("gantt.app.export.png"))])),
          e.projectModel ? o.a.createElement(Gn.a, {
              projectModel: e.projectModel,
              exportTasksPermission: !1,
              externalItems: _,
              isPresentationModeSupported: !0,
              fromWhere: "gantt"
          }) : null), o.a.createElement(R.Dialog, {
              title: f.a.get("gantt.view.mode.select"),
              visible: n,
              footer: !1,
              onClose: C
          }, o.a.createElement("div", {
              className: Wn.a["mode-card-container"]
          }, Pa.map(function(e) {
              var t, n = e.key === s, a = n ? e.activeImage : e.image, r = d()(Wn.a["mode-card"], ((t = {})[Wn.a.selected] = n,
              t));
              return o.a.createElement("div", {
                  key: e.key,
                  className: r,
                  onClick: I(e.key)
              }, o.a.createElement("div", {
                  className: Wn.a["image-wrap"]
              }, o.a.createElement("div", {
                  className: Wn.a.preview,
                  style: {
                      backgroundImage: "url(" + a + ")"
                  }
              })), o.a.createElement("div", {
                  className: Wn.a.footer
              }, o.a.createElement("div", {
                  className: Wn.a.name
              }, e.name), o.a.createElement("div", {
                  className: Wn.a.des,
                  title: e.des
              }, e.des)))
          })), o.a.createElement("div", {
              className: Wn.a["button-wrap"]
          }, o.a.createElement(R.Button, {
              type: "primary",
              onClick: M
          }, f.a.get("confirm"))))))
      }
        , La = n("iGbvo7jU")
        , Va = n.n(La)
        , $a = n("ayFg9gfF")
        , Aa = n("Oc+P9SdO")
        , qa = n("FZi6/fIB");
      n.d(t, "GANTT_HELP_DOC_URL", function() {
          return za
      }),
      n.d(t, "GanttAppInner", function() {
          return Xa
      }),
      n.d(t, "GanttApp", function() {
          return Ga
      });
      var za = "https://support.teambition.com/help/docs/5e7c56929bcd95001ad6a99d"
        , Ua = "taskLayer IN (0,1,2,3,4,5,6,7,8)";
      var Xa = function(e) {
          var t, n = Object(r.useRef)(!1), u = Object(k.D)(), p = Object(a.__read)(function(e) {
              var t = Object(v.p)()
                , n = Object(ut.b)()
                , c = Object(I.h)(e)
                , l = Object(r.useMemo)(function() {
                  return c ? new pt.a(c,{
                      bindByMatrix: !1
                  }) : void 0
              }, [c])
                , s = Object(I.d)(e)
                , u = Object(I.k)()
                , d = u.value ? u.value + " AND " + Ua : Ua
                , p = Object(I.m)(e, d)
                , f = Object(r.useMemo)(function() {
                  return null == p ? void 0 : p.map(function(e) {
                      return e._id
                  })
              }, [p])
                , m = Object(I.e)(n, e, f)
                , b = Object(I.i)(e)
                , g = Object(I.j)(c)
                , h = Object(I.c)(n)
                , O = Object(k.m)(function() {
                  return c ? I.a.define({
                      project: c
                  }).can(I.a.Action.CreateTask) : i.Observable.of(!1)
              }, [c])
                , j = Object(I.l)()
                , y = Object(I.f)(e)
                , _ = y.ganttPreferences
                , E = y.onGanttPreferencesChange
                , x = Object(Aa.a)(e, t, u.onChange)
                , C = x.currentView
                , S = x.updateCurrentView
                , M = Object(st.useGroupBySelectProps)(c, C, S)
                , N = {
                  canCreateTask: O
              }
                , T = Object(a.__read)(Object(r.useMemo)(function() {
                  return [b && Object(w.findDefaultScenarioFieldConfig)(b, s), b && Object(w.findSubtaskDefaultScenarioFieldConfig)(b, s)]
              }, [b, s]), 2)
                , D = T[0]
                , R = T[1]
                , F = Object(qa.a)(e);
              return [n, c, p, s, f, m, N, b, D, R, function() {
                  return o.a.createElement(Ba, {
                      _projectId: e,
                      project: c,
                      projectModel: l,
                      ganttPreferences: _,
                      groupBySelectProps: M,
                      taskFilterActive: j,
                      onGanttPreferencesChange: E,
                      onTaskFilterChange: u.onChange,
                      currentView: C
                  })
              }
              , g, h, M, t, C, S, F]
          }(e.projectId), 18), h = p[0], T = p[1], D = p[2], R = p[3], F = p[4], P = p[5], B = p[6], L = p[7], V = p[8], $ = p[9], A = p[10], q = p[11], z = p[12], U = p[13], X = p[14], G = p[15], K = p[16], H = p[17];
          Object(r.useEffect)(function() {
              z && X.setCalendar(z)
          }, [z]);
          var W = Object(a.__read)(Object(r.useState)([]), 2)
            , Y = W[0]
            , J = W[1]
            , Q = Object(k.c)(X.outlineRowIndex$)
            , Z = Object(a.__read)(Object(I.b)(X.baseline$), 1)[0]
            , ee = Object(an.useLocalStore)("sortBy2", X.sortBy$)
            , te = Object(an.usePos)(e.projectId)
            , ne = te.getPos
            , ae = te.setPos
            , re = te.savePos
            , oe = Object(an.useDoc)(e.projectId, D, Y, P, Z, ne);
          Object(r.useEffect)(function() {
              if (oe && ne) {
                  var e = new Map;
                  oe.tasks.forEach(function(t) {
                      null == ne(t.id) && e.set(t.id, t.pos)
                  }),
                  re(e)
              }
          }, [re, ne, oe]),
          Object(r.useEffect)(function() {
              X.setSetPos(ae),
              X.setSavePos(re)
          }, [ae, re, X]);
          var ie = Object(st.useGroupRowOptions)(T, null === (t = U.value) || void 0 === t ? void 0 : t.value)
            , ce = Object(r.useMemo)(function() {
              var e = U.value;
              if (e && ie) {
                  var t = e.value;
                  return null == oe ? void 0 : oe.createView({
                      sortBy: ee,
                      columns: [{
                          index: 1,
                          key: "executor",
                          comparer: N.b
                      }],
                      groupBy: "none" !== t ? {
                          key: t,
                          forEach: function(e) {
                              var n, a = ie.get(e.payload.value), r = e.firstChild ? e.firstChild : void 0;
                              if (a)
                                  e.payload.pos = a.pos,
                                  e.payload.disabled = a.disabled,
                                  e.payload.content = a.name,
                                  e.payload.userdata = a.userdata;
                              else if ("_executorId" === t && "task" === (null == r ? void 0 : r.kind)) {
                                  var o = null === (n = r.payload.tbTask.executor) || void 0 === n ? void 0 : n.name;
                                  o ? (e.payload.pos = NaN,
                                  e.payload.content = o) : (e.payload.pos = Number.MAX_SAFE_INTEGER,
                                  e.payload.content = f.a.get("table.edit.executor.unset"))
                              }
                              e.payload.content += f.a.get("gantt.majorFilter.separator.minor") + ("task" === (null == r ? void 0 : r.kind) ? Object($a.b)(r, function(e) {
                                  return "foot" !== e.kind ? 1 : 0
                              }) : 0)
                          }
                      } : void 0
                  })
              }
          }, [oe, U.value, ie, ee]);
          Object(r.useEffect)(function() {
              var e = !(oe && T && P && L && R && z);
              if (!n.current && !e) {
                  n.current = !0;
                  var t = oe && oe.tasks.length > 0 ? "gantt.hasTask.welcome" : "gantt.noTask.welcome";
                  we.a.event({
                      action: "gantt.init",
                      mode: "gantt",
                      stage: t
                  })
              }
          }, [oe, T, P, L, R, z]),
          Object(r.useEffect)(function() {
              J(function(e) {
                  var t = e.findIndex(function(e) {
                      return (F || []).includes(e._id)
                  });
                  return t >= 0 ? Object(a.__spread)(e.slice(0, t), e.slice(t + 1)) : e
              })
          }, [F]);
          var le = Object(an.useProjectAppStatus)(e.projectId, "startDate")
            , se = Object(an.useProjectAppStatus)(e.projectId, "effort")
            , ue = Object(an.useColumns)({
              projectId: e.projectId,
              savedColumns: G.columns,
              taskFields: H,
              startEnabled: le,
              fsEnabled: "on" === Q.switch,
              effortEnabled: se
          })
            , de = ue.columns
            , pe = ue.enabledColumns
            , fe = ue.visibleColumns
            , me = Object(r.useCallback)(function(e, t) {
              K(function(n) {
                  var r = de
                    , o = Object(N.c)(e)
                    , i = r.map(function(e) {
                      return o === Object(N.c)(e) ? Object(a.__assign)(Object(a.__assign)({}, e), {
                          visible: t
                      }) : e
                  });
                  return Object(a.__assign)(Object(a.__assign)({}, n), {
                      columns: i
                  })
              })
          }, [K, de])
            , be = Object(r.useCallback)(function(t) {
              K({
                  columns: t
              }),
              Object(Ke.c)(e.projectId, t)
          }, [e.projectId, K])
            , ge = function(e) {
              return e.parent
          }
            , ve = Object(r.useCallback)(function(e) {
              if (e)
                  return "group" === e.kind ? e : ve(e.parent)
          }, [])
            , he = Object(r.useCallback)(function(t, n) {
              var r, o = t._taskId ? $ : V, i = t._scenariofieldconfigId || (o ? o._id : void 0), c = Object(E.getDefaultStatus)(o && o.taskflowstatuses || []), l = c ? c._id : void 0, s = Object(a.__assign)(Object(a.__assign)({
                  _projectId: e.projectId,
                  _scenariofieldconfigId: i,
                  _taskflowstatusId: l,
                  _tasklistId: null == R ? void 0 : R._id,
                  _id: "draft:" + Date.now(),
                  pos: Object(N.d)(n)
              }, t), ((r = {})[M.a] = !0,
              r));
              o && o.scenariofields.some(function(e) {
                  return e.required
              }) ? function(e) {
                  b.APP.openCreator("task", e)
              }(Object(a.__assign)(Object(a.__assign)({}, s), {
                  _projectId: e.projectId,
                  ancestorId: s._taskId
              })) : (J(function(e) {
                  return e.concat(s)
              }),
              X.visibleTasks$.value.length > 1 && we.a.event({
                  action: "gantt.createTask.stage1.success",
                  mode: "gantt"
              }))
          }, [e.projectId, V, $, R, X.visibleTasks$])
            , Oe = Object(r.useCallback)(function(e, t) {
              var n = ve(t);
              he(Object(a.__assign)(Object(a.__assign)({}, e), Ka(n)), t)
          }, [he, ve])
            , je = Object(r.useCallback)(function(e, t, n) {
              if ("draft" === e.kind || "task" === e.kind) {
                  var r, o = function(e) {
                      var t = e.childCount > 0 && !e.collapsed ? e : ge(e);
                      if (!t || "task" === t.kind) {
                          for (; t && "task" === t.kind && t.payload.isDone; )
                              t = ge(t);
                          return t
                      }
                  }(e), i = null == o ? void 0 : o.payload.id, l = ve(e);
                  if (Object(N.e)(e.payload.tbTask)) {
                      if (0 === t.length)
                          return void (n || J(function(t) {
                              return t.filter(function(t) {
                                  return t._id !== e.payload.tbTask._id
                              })
                          }));
                      var s = Object(v.i)(e.payload, L || [])
                        , d = Object(a.__assign)(Object(a.__assign)({}, e.payload.tbTask), {
                          content: t
                      });
                      s && delete d._taskflowstatusId,
                      r = g.default.createTask(d).do(function(e) {
                          return _.NewTaskManager.guarantee(e)
                      }),
                      b.gta.event({
                          action: "create " + (s ? "milestone" : "task"),
                          segment: "gantt app",
                          page: "gantt page"
                      })
                  } else {
                      if (0 === t.length || t === e.payload.content)
                          return void (n && B.canCreateTask && he(Object(a.__assign)({
                              _taskId: i
                          }, Ka(l)), e));
                      r = g.default.updateTask(e.payload.id, {
                          content: t
                      }).pipe(Object(c.tap)(function() {
                          b.gta.event({
                              action: "edited title",
                              control: "Title",
                              page: "gantt page",
                              category: "outline"
                          })
                      }))
                  }
                  n && B.canCreateTask && he(Object(a.__assign)({
                      _taskId: i,
                      _scenariofieldconfigId: e.payload._scenariofieldconfigId
                  }, Ka(l)), e);
                  var p = r.pipe(Object(c.tap)(function(t) {
                      Object(N.e)(e.payload.tbTask) && J(function(n) {
                          return n.map(function(n) {
                              return n._id === e.payload.tbTask._id ? (t.pos = n.pos,
                              X.savePos(new Map([[t._id, n.pos]])),
                              t) : n
                          })
                      })
                  }, function() {
                      Object(N.e)(e.payload.tbTask) && J(function(t) {
                          return t.filter(function(t) {
                              return t._id !== e.payload.tbTask._id
                          })
                      })
                  })).subscribe({
                      error: j.throwError
                  });
                  u.guarantee(p)
              }
          }, [B.canCreateTask, he, ve])
            , ye = Object(r.useCallback)(function(e, t) {
              K(function(n) {
                  var r = n.columns.map(function(n) {
                      return n.payload.name === e.payload.name ? Object(a.__assign)(Object(a.__assign)({}, n), {
                          width: Math.max(t, n.minWidth)
                      }) : n
                  });
                  return Object(a.__assign)(Object(a.__assign)({}, n), {
                      columns: r
                  })
              })
          }, [K])
            , ke = Object(r.useCallback)(function(e) {
              "task" === e.kind && b.APP.openTaskPreviewer(e.payload.tbTask._id, {
                  hasLink: !1,
                  hasNavigator: !0,
                  isUsePanel: b.PREFERENCE.getIsUsePanelToOpenObject()
              })
          }, [])
            , _e = Object(r.useCallback)(function(e) {
              if ("task" === e.kind) {
                  var t = e.prevSibling;
                  if (t) {
                      var n = t.payload
                        , r = e.payload
                        , o = t.parent
                        , i = o && "task" === o.kind ? o.payload : n;
                      if (!Object(N.e)(i.tbTask) && Object(y.isVisibleTask)(i) && !i.isDone) {
                          var c = r.tbTask._taskId === n.tbTask._taskId ? n : i;
                          if (Object(N.e)(r.tbTask))
                              J(function(e) {
                                  return e.map(function(e) {
                                      return e._id === r.tbTask._id ? Object(a.__assign)(Object(a.__assign)({}, e), {
                                          _taskId: c.tbTask._id
                                      }) : e
                                  })
                              });
                          else {
                              var l = g.default.fetch.updateTaskParent(r.id, c.id).subscribe({
                                  error: j.throwError
                              });
                              u.guarantee(l)
                          }
                      }
                  }
              }
          }, [])
            , Ee = Object(r.useCallback)(function(e) {
              if ("task" === e.kind) {
                  var t = e.parent;
                  if (t && "task" === t.kind) {
                      var n = t.parent
                        , r = "task" === (null == n ? void 0 : n.kind) ? n.payload.id : void 0;
                      if (Object(N.e)(e.payload.tbTask))
                          J(function(t) {
                              return t.map(function(t) {
                                  return t._id === e.payload.tbTask._id ? Object(a.__assign)(Object(a.__assign)({}, t), {
                                      _taskId: r
                                  }) : t
                              })
                          });
                      else {
                          var o = e.payload.id
                            , i = e.payload._taskflowstatusId
                            , c = e.payload._scenariofieldconfigId
                            , l = e.payload._stageId
                            , s = (r ? Object(S.g)(o, r) : i ? Object(S.i)(o, i, c, void 0, !0) : Object(S.f)(o, {
                              _stageId: l,
                              doTransform: !0
                          })).subscribe({
                              error: j.throwError
                          });
                          u.guarantee(s)
                      }
                  }
              }
          }, [])
            , xe = Object(r.useCallback)(function(e) {
              if ("task" === e.kind) {
                  var t = ge(e)
                    , n = "task" === (null == t ? void 0 : t.kind) ? t.payload.id : void 0
                    , r = ve(e);
                  he(Object(a.__assign)({
                      _taskId: n
                  }, Ka(r)), e)
              }
          }, [he, ve])
            , Ce = Object(r.useCallback)(function(e) {
              var t = "task" === (null == e ? void 0 : e.kind) ? e.payload.id : void 0;
              he({
                  _taskId: t
              })
          }, [he])
            , Ie = Object(r.useCallback)(function(e, t, n) {
              if ("task" === e.kind) {
                  var a = (n ? g.default.updateTaskTaskflowStatus(e.payload.id, n, t._id) : g.default.updateTaskScenarioFieldConfig(e.payload.id, {
                      _scenariofieldconfigId: t._id
                  })).subscribe();
                  u.guarantee(a)
              }
          }, [])
            , Se = Object(r.useCallback)(function(e) {
              if ("task" === e.kind) {
                  var t = g.default.archiveTask(e.payload.id).subscribe();
                  u.guarantee(t),
                  0 === e.index && we.a.event({
                      action: "gantt.skip",
                      mode: "gantt"
                  })
              }
          }, [])
            , Me = Object(r.useCallback)(function(e) {
              if ("task" !== e.kind)
                  return i.Observable.of({
                      result: !1
                  });
              var t = e.prevSibling;
              if ("task" !== (null == t ? void 0 : t.kind))
                  return i.Observable.of({
                      result: !1
                  });
              var n = t && t.payload;
              return n && Object(y.isVisibleTask)(n) && !n.isDone ? Object(N.e)(n.tbTask) ? i.Observable.of({
                  result: !0
              }) : new O.a(n.tbTask,{
                  bindByMatrix: !1
              }).hasPermission$("task.put.move").map(function(e) {
                  return {
                      result: e,
                      reason: e ? void 0 : f.a.get("gantt.app.outline.task.move.forbidden")
                  }
              }) : i.Observable.of({
                  result: !1
              })
          }, [])
            , Ne = Object(r.useCallback)(function(e) {
              if ("task" !== e.kind)
                  return i.Observable.of({
                      result: !1
                  });
              var t = ge(e);
              if (!t || "task" !== t.kind)
                  return i.Observable.of({
                      result: !1
                  });
              if (Object(N.e)(e.payload.tbTask))
                  return i.Observable.of({
                      result: !0
                  });
              var n = !ge(t);
              return new O.a(e.payload.tbTask,{
                  bindByMatrix: !1
              }).hasPermission$(n ? "task.put.transform" : "task.put.move").map(function(e) {
                  var t;
                  return e || (t = n ? f.a.get("gantt.app.outline.task.transform.forbidden") : f.a.get("gantt.app.outline.task.move.forbidden")),
                  {
                      result: e,
                      reason: t
                  }
              })
          }, [])
            , Te = Object(r.useCallback)(function(e) {
              return "task" !== e.kind || e.payload.isDone || !Object(y.isVisibleTask)(e.payload) ? i.Observable.of({
                  result: !1
              }) : i.Observable.of({
                  result: B.canCreateTask
              })
          }, [B.canCreateTask])
            , De = Object(r.useCallback)(function(e) {
              var t = ge(e);
              return t ? Te(t) : i.Observable.of({
                  result: B.canCreateTask
              })
          }, [Te, B.canCreateTask])
            , Re = Object(r.useCallback)(function(e) {
              return "task" !== e.kind ? i.Observable.of({
                  result: !1
              }) : new O.a(e.payload.tbTask,{
                  bindByMatrix: !1
              }).hasPermission$("task.put").map(function(e) {
                  return {
                      result: e,
                      reason: e ? void 0 : f.a.get("gantt.app.outline.task.edit.forbidden")
                  }
              })
          }, [])
            , Fe = Object(r.useCallback)(function(e) {
              return "task" !== e.kind || Object(N.e)(e.payload.tbTask) ? i.Observable.of({
                  result: !1
              }) : new O.a(e.payload.tbTask,{
                  bindByMatrix: !1
              }).hasPermission$("task.put.archive").map(function(e) {
                  return {
                      result: e,
                      reason: e ? void 0 : f.a.get("gantt.app.outline.task.archive.forbidden")
                  }
              })
          }, [])
            , Pe = function(e) {
              var t = e.creates
                , n = e.updates
                , r = e.deletes;
              if (r.length > 0) {
                  var o = r.map(function(e) {
                      return g.default.fetch.deleteTaskDependency(e._id)
                  });
                  (r.length < 4 ? s.forkJoin.apply(void 0, Object(a.__spread)(o)) : i.Observable.concat.apply(i.Observable, Object(a.__spread)(o))).pipe(Object(c.switchMap)(function() {
                      if (t.length > 0) {
                          var e = t.map(function(e) {
                              var t = e._fromId
                                , n = e._toId
                                , a = e.kind
                                , r = e.lagTime;
                              return g.default.fetch.createTaskDependency({
                                  _fromId: t,
                                  _toId: n,
                                  kind: a,
                                  lagTime: r
                              })
                          });
                          return t.length < 4 ? s.forkJoin.apply(void 0, Object(a.__spread)(e)) : i.Observable.concat.apply(i.Observable, Object(a.__spread)(e))
                      }
                      return Object(l.of)({})
                  })).subscribe({
                      error: j.throwError
                  })
              } else if (t.length > 0) {
                  var u = t.map(function(e) {
                      var t = e._fromId
                        , n = e._toId
                        , a = e.kind
                        , r = e.lagTime;
                      return g.default.fetch.createTaskDependency({
                          _fromId: t,
                          _toId: n,
                          kind: a,
                          lagTime: r
                      })
                  });
                  t.length < 4 ? s.forkJoin.apply(void 0, Object(a.__spread)(u)).subscribe({
                      error: j.throwError
                  }) : i.Observable.concat.apply(i.Observable, Object(a.__spread)(u)).subscribe({
                      error: j.throwError
                  })
              }
              if (n.length > 0) {
                  o = n.map(function(e) {
                      return g.default.fetch.updateTaskDependency(e._id, {
                          lagTime: e.lagTime
                      })
                  });
                  n.length < 4 ? s.forkJoin.apply(void 0, Object(a.__spread)(o)).subscribe({
                      error: j.throwError
                  }) : i.Observable.concat.apply(i.Observable, Object(a.__spread)(o)).subscribe({
                      error: j.throwError
                  })
              }
              b.gta.event({
                  action: "created task dependency",
                  page: "gantt page",
                  category: "outline"
              })
          };
          return o.a.createElement(v.b.Provider, {
              value: X
          }, o.a.createElement("div", {
              className: Va.a.container
          }, A(), H && ce && T && oe && P && L && R && z ? o.a.createElement(lt, {
              organizationId: h,
              project: T,
              dependencies: P,
              columns: pe,
              scenarioFieldConfigs: L,
              taskFields: H,
              onColumnSort: be,
              onColumnToggle: me,
              onTaskCreate: Oe,
              onTaskSave: je,
              onDependencyChange: Pe,
              onRowOpen: ke,
              onRowIndent: _e,
              onRowUnindent: Ee,
              onRowAdd: xe,
              onRowAddChild: Ce,
              onRowSelectScenarioFieldConfig: Ie,
              onRowArchive: Se,
              canIndent: Me,
              canUnindent: Ne,
              canAdd: De,
              canAddChild: Te,
              canSelectScenarioFieldConfig: Re,
              canArchive: Fe
          }, o.a.createElement(x.b, {
              className: Va.a.body,
              columns: fe,
              taskDependencies: P,
              scenarioFieldConfigs: L,
              searchesFilter: q,
              project: T,
              onColumnResize: ye,
              onTaskCreate: Oe,
              view: ce
          })) : o.a.createElement("div", {
              className: d()(Va.a.body, Va.a.loading)
          }, o.a.createElement(m.Loading, null)), o.a.createElement(C.UsingDetailObjectNavigator, {
              data: D
          })))
      }
        , Ga = function(e) {
          var t = na()
            , n = t.remainingTrialTime
            , r = t.isEnterprisePro
            , i = t.payProtocol;
          return r ? o.a.createElement(Xa, Object(a.__assign)({}, e)) : n ? n <= 0 ? o.a.createElement(la, {
              payProtocol: i
          }) : o.a.createElement(Xa, Object(a.__assign)({}, e)) : o.a.createElement("div", {
              className: d()(Va.a.body, Va.a.loading)
          }, o.a.createElement(m.Loading, null))
      }
        , Ka = function(e) {
          var t;
          if (!e || "group" !== e.kind)
              return {};
          var n = e.payload;
          return "null" === n.value ? {} : ((t = {})[n.key] = n.value,
          t)
      }
  },
  kemlH0yS: function(e, t, n) {
      e.exports = {
          "time-axis-scale-select": "time-axis-scale-select__3fTI",
          shadow: "shadow__3n0C",
          scrolling: "scrolling__2c3k",
          trigger: "trigger__3NoY",
          text: "text__2O4S"
      }
  },
  ki1b9Z12: function(e, t, n) {
      e.exports = {
          "task-dependency-menu": "task-dependency-menu__K4JG",
          taskDependencyMenuSlideIn: "taskDependencyMenuSlideIn__gAow",
          divider: "divider__2e1p"
      }
  },
  "m0+xvcv5": function(e, t, n) {
      e.exports = {
          milestone: "milestone__3Fx6",
          disabled: "disabled__u7OI"
      }
  },
  m7vwaL1T: function(e, t, n) {
      e.exports = {
          body: "body__38O5",
          "view-loose": "view-loose__hKgD",
          "row-index": "row-index__3xNX",
          "view-compact": "view-compact__1L78",
          scrollable: "scrollable__3FQe",
          head: "head__NLQw",
          foot: "foot__2eLG",
          row: "row__29JV",
          done: "done__3an6",
          cell: "cell__3xqP",
          config: "config__3_dc",
          suffix: "suffix__1j4D",
          "row-before": "row-before__3blm",
          "row-indentation": "row-indentation__2dHs",
          "row-menu-and-toggler": "row-menu-and-toggler___F4q",
          "row-menu": "row-menu__QRiG",
          "row-toggler": "row-toggler__3rTS",
          "row-handle": "row-handle__210U",
          "resize-active": "resize-active__1t-e",
          "resize-default": "resize-default__2DLj"
      }
  },
  mpzOoqCm: function(e, t, n) {
      e.exports = {
          block: "block__1ibh",
          date: "date__7am6",
          loose: "loose__P0PP"
      }
  },
  mrKGYOJc: function(e, t, n) {
      e.exports = {
          "popup-head": "popup-head__291F",
          "select-scenario-field-config-view": "select-scenario-field-config-view__2Y37",
          popup: "popup__2xg9",
          "popup-body": "popup-body__37yU",
          "menu-trigger": "menu-trigger__2YZ4",
          danger: "danger__2yG_",
          "main-view": "main-view__KEvn",
          "select-taskflow-status-view": "select-taskflow-status-view__sVL-"
      }
  },
  nBSNr7Yr: function(e, t, n) {
      e.exports = {
          "chart-svg-renderer": "chart-svg-renderer__7ors"
      }
  },
  neNcRnXs: function(e, t, n) {
      e.exports = {
          "date-text": "date-text__3DHM"
      }
  },
  "o+ltSccZ": function(e, t, n) {
      e.exports = {
          "h-scroll-bar": "h-scroll-bar__14Af",
          thumb: "thumb__pETu"
      }
  },
  oAQ2rwGq: function(e, t, n) {
      e.exports = {
          "save-custom-button": "save-custom-button__3Wr-"
      }
  },
  oDmDJJFE: function(e, t, n) {},
  oDp7ehds: function(e, t, n) {
      e.exports = {
          "critical-path-switch": "critical-path-switch__334i",
          left: "left__knU5",
          label: "label__K755"
      }
  },
  "p/xIafCG": function(e, t, n) {
      e.exports = {
          effort: "effort__1wjx",
          input: "input__N3xF"
      }
  },
  pFBw0vn2: function(e, t, n) {
      e.exports = {
          chart: "chart__3nGi",
          "render-chunk": "render-chunk__22Ez"
      }
  },
  "pTYp/6Pi": function(e, t, n) {
      e.exports = n.p + "images/teambition-gantt-logo.87261c6d.svg"
  },
  ptBKV45J: function(e, t, n) {
      "use strict";
      var a, r = n("7QVRqOtl"), o = n("cDcdfi41"), i = n.n(o), c = n("mUO4mgya"), l = n.n(c), s = n("O94r4YFm"), u = n.n(s), d = n("OMreQJJ/"), p = n("HzCjrc5d"), f = n("/GeFQFAU"), m = n("kEFXGxyL"), b = n.n(m), g = n("tdgGlFT/"), v = n.n(g), h = function() {
          var e = Object(p.q)()
            , t = e.dividerPosition$
            , n = e.outlineSize$
            , a = e.outlineHidden$
            , r = e.toggleOutlineHidden
            , c = e.outlineCellResize$
            , l = Object(f.c)(a)
            , s = Object(f.c)(t)
            , d = Object(f.c)(c)
            , b = Object(f.c)(n).height
            , g = Object(o.useMemo)(function() {
              return (b + 30) / 2
          }, [b])
            , h = Object(o.useMemo)(function() {
              var e;
              return u()(v.a.arrow, ((e = {})[v.a.reverse] = l,
              e))
          }, [l])
            , O = Object(o.useMemo)(function() {
              var e;
              return u()(v.a.divider, ((e = {})[v.a["vertical-disabled"]] = !!d,
              e))
          }, [d])
            , j = Object(o.useCallback)(function() {
              r(),
              m.gta.event({
                  action: (l ? "show" : "hide") + " sidebar",
                  control: "sidebar",
                  page: "gantt page"
              })
          }, [l]);
          return i.a.createElement("div", {
              style: {
                  left: s
              },
              className: O,
              onClick: j
          }, i.a.createElement("hr", null), i.a.createElement("div", {
              style: {
                  top: g
              },
              className: v.a["icon-wrapper"]
          }, i.a.createElement("i", {
              className: h
          })))
      }, O = n("wgY5hGF4"), j = n.n(O), y = n("cP28Uy3B"), k = n.n(y), _ = n("p8P8vxSn"), w = n("7e6nhGRf"), E = n.n(w), x = Object(o.memo)(function(e) {
          var t, n = e.element, a = e.workday, o = {
              width: n.position.upper.x - n.position.lower.x,
              left: n.position.lower.x
          }, c = "minor" === n.role && n.scale === r.c.day && Object(p.k)(n.dateRange), l = u()(E.a[n.role], ((t = {})[E.a.weekends] = !a && n.scale === r.c.day,
          t[E.a.highlight] = c,
          t));
          return i.a.createElement(_.Tooltip, {
              title: k.a.get("today"),
              hidden: !c
          }, i.a.createElement("div", {
              className: l,
              style: o,
              key: n.payload.valueOf()
          }, i.a.createElement("div", {
              className: E.a.label
          }, function(e) {
              if (e.scale === r.c.halfYear) {
                  var t = e.payload.get("month") < 6 ? "h1" : "h2";
                  return k.a.get("gantt.timeAxis." + e.role + ".year." + t)
              }
              var n = k.a.get("gantt.timeAxis." + e.role + "." + e.scale);
              return e.payload.format(n)
          }(n)), c && i.a.createElement("div", {
              className: E.a["highlight-bg"]
          })))
      }, function(e, t) {
          return e.element.position.lower.x === t.element.position.lower.x
      }), C = n("fUQRxr5F"), I = n.n(C), S = function() {
          var e = Object(p.q)()
            , t = e.visibleDateTimes$
            , n = e.outlineSize$
            , a = e.chartSize$
            , r = e.chartScrollLeft$
            , c = e.workdays$
            , l = e.calendar$
            , s = e.consumeChartWheelEvent
            , u = e.commitChartMouseEvent
            , m = e.commitMouseEvent
            , b = Object(f.c)(n, function(e, t) {
              return e.width === t.width
          })
            , g = Object(f.c)(t)
            , v = Object(f.c)(a, function(e, t) {
              return e.width === t.width
          })
            , h = Object(f.c)(c)
            , O = Object(f.c)(l)
            , y = g.major
            , k = g.minor
            , _ = Object(o.useRef)(null)
            , w = Object(o.useRef)(null)
            , E = Object(o.useMemo)(function() {
              var e = new Map;
              return null == O || O.personalizations.forEach(function(t) {
                  e.set(j()(t.start).startOf("day").valueOf(), t.kind)
              }),
              function(t) {
                  return e.get(t.valueOf())
              }
          }, [O])
            , C = Object(o.useMemo)(function() {
              return function(e) {
                  var t = E(e);
                  return t ? "workday" === t : h.has(e.isoWeekday())
              }
          }, [E, h]);
          Object(o.useEffect)(function() {
              var e = r.pipe(Object(d.tap)(function(e) {
                  _.current && (_.current.style.transform = "translateX(" + -e + "px)")
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [r]);
          var S = Object(o.useMemo)(function() {
              return {
                  left: b.width,
                  width: v.width
              }
          }, [b.width, v.width])
            , M = Object(o.useMemo)(function() {
              return {
                  wheel: function(e) {
                      return s(e)
                  },
                  mouseDown: function(e) {
                      return u(e.nativeEvent, w.current)
                  },
                  mouseUp: function(e) {
                      return u(e, w.current)
                  },
                  mouseMove: function(e) {
                      return m(e.nativeEvent, w.current)
                  }
              }
          }, [s, u, m])
            , N = function(e) {
              return i.a.createElement(x, {
                  key: e.position.lower.x,
                  element: e,
                  workday: C(e.payload)
              })
          };
          return i.a.createElement("div", {
              ref: function(e) {
                  e !== w.current && (w.current && (w.current.removeEventListener("wheel", M.wheel),
                  window.document.removeEventListener("mouseup", M.mouseUp)),
                  w.current = e,
                  w.current && (w.current.addEventListener("wheel", M.wheel),
                  window.document.addEventListener("mouseup", M.mouseUp)))
              },
              className: I.a["time-axis"],
              style: S,
              onMouseDown: M.mouseDown,
              onMouseMove: M.mouseMove
          }, i.a.createElement("div", {
              ref: _,
              className: I.a["render-chunk"]
          }, y.map(N), k.map(N)))
      }, M = n("D57KnuyU"), N = n("90U+kJWN"), T = n("6rXl/bxS"), D = n("1NS6HBRd"), R = n.n(D), F = function(e) {
          var t, n = u()(R.a["dependency-handle"], ((t = {})[R.a.right] = !!e.isRight,
          t[R.a.loose] = e.loose,
          t));
          return i.a.createElement("div", {
              style: {
                  left: e.left,
                  width: e.width
              },
              className: n,
              onMouseUp: e.onMouseUp
          }, i.a.createElement("svg", {
              width: "12px",
              height: "12px",
              viewBox: "0 0 12 12",
              version: "1.1",
              onMouseDown: e.onMouseDown
          }, i.a.createElement("g", {
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd"
          }, i.a.createElement("circle", {
              className: R.a.outer,
              stroke: "#87D2FF",
              fill: "#FFFFFF",
              cx: "6",
              cy: "6",
              r: "5.5"
          }), i.a.createElement("circle", {
              className: R.a.inner,
              fill: "#87D2FF",
              cx: "6",
              cy: "6",
              r: "2"
          }))))
      }, P = n("iGfT7uno"), B = n.n(P), L = function(e) {
          var t, n = u()(B.a["resize-handle"], B.a[e.side], ((t = {})[B.a.disabled] = e.disabled,
          t[B.a.loose] = e.loose,
          t));
          return i.a.createElement("div", {
              style: {
                  left: e.left
              },
              className: n,
              onMouseDown: e.disabled ? void 0 : e.onMouseDown
          })
      }, V = n("Z56NkBRy"), $ = n("jDAMr4En"), A = function(e) {
          return Boolean(e.start && e.end)
      }, q = ((a = {})[r.c.day] = "day",
      a[r.c.week] = "week",
      a[r.c.month] = "week",
      a[r.c.quarter] = "month",
      a[r.c.halfYear] = "month",
      a[r.c.year] = "month",
      a), z = function(e) {
          return q[e]
      }, U = function(e, t, n, a, r, o, i) {
          if ("lower" === e) {
              var c = j()(n).startOf(o);
              if (t.end.clone().diff(c, "day") >= 0)
                  return {
                      lower: c.add(Object($.f)(r)),
                      upper: t.end
                  }
          } else if ("upper" === e) {
              var l = j()(n).endOf(o).startOf("day");
              if (t.start.clone().diff(l, "day") <= 0)
                  return {
                      lower: t.start,
                      upper: l.add(Object($.e)(r))
                  }
          } else {
              if ("both" === e) {
                  var s = Math.floor(a / V.a);
                  if (r && null !== i) {
                      var u = t.start.clone().add(s, "day")
                        , d = Object($.a)(u.toISOString(), i, r);
                      return t.start.valueOf() !== u.valueOf() || t.end.valueOf() !== d.valueOf() ? {
                          lower: u,
                          upper: d,
                          effort: i
                      } : null
                  }
                  return {
                      lower: t.start.clone().add(s, "day").startOf("day").add(Object($.f)(r)),
                      upper: t.end.clone().add(s, "day").startOf("day").add(Object($.e)(r))
                  }
              }
              if ("init" === e)
                  return {
                      lower: j()(n).startOf(o).add(Object($.f)(r)),
                      upper: j()(n).endOf(o).startOf("day").add(Object($.e)(r))
                  }
          }
          return null
      }, X = n("QKgL9JNG"), G = n.n(X), K = function(e) {
          var t, n = e.task, a = e.onClick, r = e.loose, o = Object(p.q)().taskChangeDateRangeIndicator$, c = Object(f.c)(o), l = u()(G.a["fold-handle"], ((t = {})[G.a.off] = n.collapsed,
          t[G.a.loose] = r,
          t));
          return !Object(p.j)(n) || c && c._taskId === n.payload.id ? null : i.a.createElement("div", {
              className: l,
              onClick: function() {
                  a(!n.collapsed)
              }
          }, i.a.createElement("span", {
              className: G.a.arrow
          }))
      }, H = n("3eMzznN/"), W = n("neNcRnXs"), Y = n.n(W), J = function(e) {
          return e.value ? i.a.createElement("div", {
              className: Y.a["date-text"],
              style: e.style
          }, Object(H.formatDate)(e.value).dateString) : null
      }, Q = function(e) {
          var t = e.task
            , n = e.barWidth
            , a = Object(p.q)().taskChangeDateRangeIndicator$
            , r = Object(f.c)(a);
          return r && r._taskId === t.payload.id ? i.a.createElement(i.a.Fragment, null, i.a.createElement(J, {
              value: r.dateRange.lower,
              style: {
                  right: n + 12
              }
          }), i.a.createElement(J, {
              value: r.dateRange.upper,
              style: {
                  left: n + 12
              }
          })) : null
      }, Z = n("4dGxFK86"), ee = n.n(Z), te = function(e) {
          var t, n = Object(p.q)().taskChangeDateRangeIndicator$, a = Object(f.c)(n), r = u()(ee.a.label, ((t = {})[ee.a.done] = e.task.payload.isDone,
          t[ee.a.invisible] = e.invisible,
          t[ee.a.loose] = e.loose,
          t));
          return a && a._taskId === e.task.payload.id ? null : i.a.createElement(_.Tooltip, {
              title: e.task.payload.content,
              hidden: e.invisible
          }, i.a.createElement("div", {
              className: r,
              style: {
                  left: e.left
              }
          }, e.invisible ? i.a.createElement(i.a.Fragment, null, i.a.createElement(_.Icon, {
              name: "eye-slash"
          }), k.a.get("gantt.task.invisible")) : e.task.payload.content))
      }, ne = n("RZK/vaYK"), ae = function(e) {
          var t = e.minLowerX
            , n = e.minLowerY
            , a = e.maxUpperX
            , r = e.barHeight
            , o = e.width
            , i = e.task
            , c = e.isOutRangeLeft
            , l = e.isOutRangeRight
            , s = e.hovered
            , u = e.padding;
          return "\n    M" + (a - 2) + "," + n + "\n    l" + (t - a + 4) + ",0\n    c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934\n    c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066\n    l0," + (r - 2.7 + 2 * u) + "\n    " + ie(c, i, s) + "\n    l" + (o - 12) + ",0\n    " + oe(l, i, s) + "\n    l0,-" + (r - 2.7 + 2 * u) + "\n    c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045\n    c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z\n  "
      }, re = function(e, t, n, a) {
          return void 0 === a && (a = 0),
          t || !Object(p.j)(e) ? n ? 17 + 2 * a : 9 + 2 * a : n ? 26 + 2 * a : 16 + 2 * a
      }, oe = function(e, t, n) {
          return !Object(p.j)(t) || e || n ? "\n    l4,0\n    c0.41421,0 0.78921,-0.16789 1.06066,-0.43934\n    c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066\n  " : "\n      l6,7\n      l0,-8.35\n     "
      }, ie = function(e, t, n) {
          return !Object(p.j)(t) || e || n ? "\n    c0.03256,0.38255 0.20896,0.724 0.47457,0.97045\n    c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013\n    l4,0\n  " : "\n      l0,8.35\n      l6,-7\n    "
      }, ce = n("yZFmhshG"), le = n.n(ce), se = function(e) {
          var t = e.task
            , n = e.width
            , a = e.disabled
            , r = e.critical
            , o = e.hovered
            , c = e.loose
            , l = Object(p.g)(t)
            , s = l.isOutRangeLeft
            , u = l.isOutRangeRight
            , d = ae({
              minLowerX: .5,
              minLowerY: .5,
              maxUpperX: n,
              barHeight: c ? 16 : 8,
              width: n,
              task: t,
              isOutRangeLeft: s,
              isOutRangeRight: u,
              hovered: o,
              padding: 0
          })
            , f = Object(p.e)(t, r ? "critical" : void 0)
            , m = f.fill
            , b = f.stroke
            , g = re(t, s && u, c)
            , v = a ? le.a.disabled : le.a.default;
          return i.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: n + 1,
              height: g,
              viewBox: "0 0 " + (n + 1) + " " + g
          }, i.a.createElement("path", {
              fill: m,
              stroke: b,
              d: d,
              className: v
          }))
      }, ue = n("Yybq3shZ"), de = n.n(ue), pe = function(e) {
          return i.a.createElement("div", {
              className: de.a["task-bar-invisible"],
              style: {
                  width: e.width
              }
          })
      }, fe = n("dmV+3K1m"), me = n("IqVDb1G9"), be = n("aZ+ghU91"), ge = function(e) {
          var t = e.task
            , n = e.width
            , a = e.disabled
            , r = e.hovered
            , o = Object(p.q)()
            , c = o.scenarioFieldConfigs$
            , l = o.criticalPath$
            , s = o.criticalPathVisible$
            , u = o.viewDisplayMode$
            , m = Object(f.c)(c)
            , b = Object(f.c)(u)
            , g = Boolean(Object(fe.g)(function() {
              return s.pipe(Object(d.switchMap)(function(e) {
                  return e ? l.pipe(Object(d.map)(function(e) {
                      return !!e && e.taskIds.has(t.payload.id)
                  })) : Object(me.of)(!1)
              }))
          }, []));
          return Object(N.isVisibleTask)(t.payload) ? Object(p.i)(t.payload, m) ? i.a.createElement("div", {
              style: {
                  transform: "translateX(-9px)"
              }
          }, i.a.createElement(ne.a, {
              key: t.payload.id,
              task: t,
              disabled: a
          })) : i.a.createElement(se, {
              critical: g,
              task: t,
              width: n,
              disabled: a,
              hovered: r,
              loose: b === be.a.loose
          }) : i.a.createElement(pe, {
              width: n
          })
      }, ve = Object(o.memo)(function(e) {
          var t, n = e.task, a = Object(p.q)(), c = a.dependencyCreateMouseDown$, l = a.dependencyCreateMouseUp$, s = a.taskChangeDateRange$, m = a.setTaskCollapsed, b = a.hoveredRow$, g = a.taskChangeDateRangeIndicator$, v = a.scenarioFieldConfigs$, h = a.dependencyCreate$, O = a.project$, y = a.viewDisplayMode$, k = Object(f.c)(g), _ = Object(f.c)(v), w = Object(f.c)(h), E = Object(f.c)(O), x = Object(f.c)(y), C = Object(M.__read)(Object(o.useState)(!1), 2), I = C[0], S = C[1], D = Object(o.useMemo)(function() {
              return Object(N.isVisibleTask)(n.payload)
          }, [n]), F = Object(f.m)(function() {
              return T.a.define({
                  project: E
              }).can(T.a.Action.DependencyManage)
          }, [E]), P = Object(f.m)(function() {
              return T.a.define({
                  task: n.payload.tbTask
              }).can(T.a.Action.EditTaskStartDate)
          }, [n.payload]), B = Object(f.m)(function() {
              return T.a.define({
                  task: n.payload.tbTask
              }).can(T.a.Action.EditTaskDueDate)
          }, [n.payload]), L = P && B, V = Object(o.useMemo)(function() {
              return w && w._fromTaskId === n.payload.tbTask._id
          }, [w, n.payload.tbTask._id]);
          Object(o.useEffect)(function() {
              var e = b.pipe(Object(d.map)(function(e) {
                  return n.index === e
              }), Object(d.distinctUntilChanged)(), Object(d.tap)(function(e) {
                  S(e)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [n, b]);
          var $ = A(n.payload)
            , q = Object(o.useMemo)(function() {
              return Object(p.i)(n.payload, _)
          }, [n.payload, _])
            , z = Math.max(n.position.upper.x - n.position.lower.x, Object(p.j)(n) && !q ? 26 : 10)
            , U = "translate(" + n.position.lower.x + "px, " + (n.position.lower.y + 10) + "px)"
            , X = u()(R.a["task-bar"], ((t = {})[R.a.done] = n.payload.isDone,
          t[R.a["invalid-date-range"]] = !$,
          t[R.a.overdue] = !n.payload.isDone && !!n.payload.end && j()().isAfter(n.payload.end),
          t))
            , G = Object(o.useMemo)(function() {
              return {
                  leftDown: function(e) {
                      e.stopPropagation(),
                      c.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: r.a.start
                      })
                  },
                  leftUp: function(e) {
                      e.stopPropagation(),
                      l.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: r.a.start
                      })
                  },
                  rightDown: function(e) {
                      e.stopPropagation(),
                      c.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: r.a.finish
                      })
                  },
                  rightUp: function(e) {
                      e.stopPropagation(),
                      l.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: r.a.finish
                      })
                  }
              }
          }, [n, l, c])
            , H = Object(o.useMemo)(function() {
              return {
                  right: function(e) {
                      e.stopPropagation(),
                      s.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: "upper"
                      })
                  },
                  left: function(e) {
                      e.stopPropagation(),
                      s.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: "lower"
                      })
                  },
                  both: function(e) {
                      Object(N.isVisibleTask)(n.payload) && (e.stopPropagation(),
                      s.next({
                          event: e.nativeEvent,
                          task: n,
                          kind: "both"
                      }))
                  }
              }
          }, [n, s])
            , W = {
              resize: I && !q && D,
              dependencyManage: D && (V || F && I && !k)
          }
            , Y = x === be.a.loose;
          return i.a.createElement("div", {
              className: X,
              style: {
                  transform: U
              }
          }, i.a.createElement(K, {
              task: n,
              loose: Y,
              onClick: function(e) {
                  m(n.payload.id, e)
              }
          }), i.a.createElement("div", {
              className: R.a["bar-wrap"]
          }, i.a.createElement(Oe, {
              isCreating: !!w,
              width: z,
              visible: W.dependencyManage,
              handler: G,
              loose: Y
          }), i.a.createElement(he, {
              leftDisabled: !L,
              rightDisabled: !L,
              width: z,
              handler: H,
              visible: W.resize,
              loose: Y
          }), i.a.createElement("div", {
              onMouseDown: L ? H.both : void 0,
              className: R.a.bar
          }, i.a.createElement(ge, {
              task: n,
              width: z,
              disabled: !L,
              hovered: I
          }))), i.a.createElement(te, {
              task: n,
              left: z + 42,
              invisible: !D,
              loose: Y
          }), i.a.createElement(Q, {
              task: n,
              barWidth: z
          }))
      }, function(e, t) {
          return e.task === t.task && e.position.lower.x === t.position.upper.x
      }), he = function(e) {
          var t = e.visible
            , n = e.handler
            , a = e.width
            , r = e.leftDisabled
            , o = e.rightDisabled
            , c = e.loose
            , l = u()(R.a["resize-bg"], c ? [R.a.loose] : [R.a.compact]);
          return t ? i.a.createElement(i.a.Fragment, null, i.a.createElement(L, {
              disabled: r,
              left: -14,
              side: "left",
              loose: c,
              onMouseDown: n.left
          }), i.a.createElement(L, {
              disabled: o,
              left: a,
              side: "right",
              loose: c,
              onMouseDown: n.right
          }), i.a.createElement("div", {
              style: {
                  width: a + 28,
                  left: -14
              },
              className: l
          })) : null
      }, Oe = function(e) {
          var t = e.width
            , n = e.handler
            , a = e.visible
            , r = e.isCreating
            , c = e.loose
            , l = Object(o.useMemo)(function() {
              return r ? 34 + t / 2 : 12
          }, [r, t]);
          return a ? i.a.createElement(i.a.Fragment, null, i.a.createElement(F, {
              left: -34,
              width: l,
              onMouseDown: n.leftDown,
              onMouseUp: n.leftUp,
              loose: c
          }), i.a.createElement(F, {
              left: r ? t / 2 : t + 22,
              width: l,
              isRight: !0,
              onMouseDown: n.rightDown,
              onMouseUp: n.rightUp,
              loose: c
          })) : null
      }, je = n("ezPE+7qE"), ye = n.n(je), ke = Object(o.memo)(function(e) {
          var t = Object(p.q)()
            , n = t.pxRange$
            , a = t.seek
            , r = t.viewDisplayMode$
            , o = Object(f.c)(n)
            , c = Object(f.c)(r) === be.a.loose
            , l = c ? 4 : 0
            , s = {
              top: e.task.position.lower.y + l,
              left: "left" === e.side ? o.lower : o.upper
          }
            , d = u()(ye.a["task-bar-thumb"], ye.a[e.side]);
          return i.a.createElement("div", {
              style: s,
              className: d
          }, i.a.createElement(_.Button, {
              onClick: function() {
                  return a(e.task.payload.end.valueOf())
              },
              size: "smaller",
              type: "subtle"
          }, "left" === e.side && i.a.createElement(_.Icon, {
              name: "triangle-right-s"
          }), i.a.createElement(te, {
              task: e.task,
              left: 0,
              invisible: !1,
              loose: c
          }), "right" === e.side && i.a.createElement(_.Icon, {
              name: "triangle-left-s"
          })))
      }, function(e, t) {
          return e.task === t.task && e.position.lower.x === t.position.upper.x && t.side === e.side
      }), _e = Object(o.memo)(function() {
          var e = Object(p.q)()
            , t = e.visibleTasks$
            , n = e.dateRange$
            , a = Object(f.c)(t)
            , r = Object(f.c)(n);
          return i.a.createElement(i.a.Fragment, null, a.filter(function(e) {
              return "task" === e.kind
          }).map(function(e) {
              if (r && A(e.payload)) {
                  if (e.payload.start.valueOf() > r.upper.valueOf())
                      return i.a.createElement(ke, {
                          key: e.payload.id,
                          task: e,
                          position: e.position,
                          side: "right"
                      });
                  if (e.payload.end.valueOf() < r.lower.valueOf())
                      return i.a.createElement(ke, {
                          key: e.payload.id,
                          task: e,
                          position: e.position,
                          side: "left"
                      })
              }
              return i.a.createElement(ve, {
                  key: e.payload.id,
                  task: e,
                  position: e.position
              })
          }))
      }), we = function(e) {
          var t = e.task
            , n = e.width
            , a = e.loose
            , r = ae({
              minLowerX: .5,
              minLowerY: .5,
              maxUpperX: n,
              barHeight: a ? 16 : 8,
              width: n,
              task: t,
              isOutRangeLeft: !1,
              isOutRangeRight: !1,
              hovered: !1,
              padding: 2
          })
            , o = re(t, !1, a, 2);
          return i.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: n + 2,
              height: o,
              viewBox: "0 0 " + (n + 2) + " " + o
          }, i.a.createElement("path", {
              fill: "#e5e5e5",
              fillOpacity: .3,
              stroke: "#262626",
              d: r
          }))
      }, Ee = n("162oLhLu"), xe = n.n(Ee), Ce = Object(o.memo)(function(e) {
          var t = e.task
            , n = e.baselineTask
            , a = Object(p.q)()
            , r = a.scenarioFieldConfigs$
            , c = a.computePosition
            , l = a.viewDisplayMode$
            , s = Object(f.c)(l)
            , d = c(t.index, n.start, n.end)
            , m = Object(f.c)(r)
            , b = Object(o.useMemo)(function() {
              return Object(p.i)(t.payload, m)
          }, [t.payload, m])
            , g = Math.max(d.upper.x - d.lower.x, Object(p.j)(t) && !b ? 26 : 10)
            , v = "translate(" + d.lower.x + "px, " + (d.lower.y + 10 - 2) + "px)"
            , h = u()(xe.a["baseline-bar"]);
          return i.a.createElement("div", {
              className: h,
              style: {
                  transform: v
              }
          }, i.a.createElement(we, {
              task: t,
              width: g,
              loose: s === be.a.loose
          }))
      }, function(e, t) {
          var n, a, r, o;
          return e.task === t.task && e.position.lower.x === t.position.lower.x && (null === (n = e.baselineTask.start) || void 0 === n ? void 0 : n.valueOf()) === (null === (a = t.baselineTask.start) || void 0 === a ? void 0 : a.valueOf()) && (null === (r = e.baselineTask.end) || void 0 === r ? void 0 : r.valueOf()) === (null === (o = t.baselineTask.end) || void 0 === o ? void 0 : o.valueOf())
      }), Ie = Object(o.memo)(function() {
          var e = Object(p.q)()
            , t = e.visibleTasks$
            , n = e.dateRange$
            , a = Object(f.c)(t)
            , r = Object(f.c)(n);
          return i.a.createElement(i.a.Fragment, null, a.filter(Se).map(function(e) {
              if (r && A(e.payload)) {
                  if (e.payload.start.valueOf() > r.upper.valueOf())
                      return null;
                  if (e.payload.end.valueOf() < r.lower.valueOf())
                      return null
              }
              return i.a.createElement(Ce, {
                  key: e.payload.id,
                  task: e,
                  position: e.position,
                  baselineTask: e.payload.baseline
              })
          }))
      }), Se = function(e) {
          return !!e.payload.baseline
      }, Me = n("tegbLlUc"), Ne = n("pMwV/Sk8"), Te = n("KObrIyx2"), De = function(e, t, n) {
          if (n === Te.a.fs && e.x === t.x) {
              var a = t.y + (e.y < t.y ? -10 : 10)
                , r = t.y + (e.y < t.y ? -14 : 14);
              return "M" + (e.x + 6) + "," + a + " L" + (e.x + 6 - 3) + "," + r + "L" + (e.x + 6 + 3) + "," + r + " Z"
          }
          var o = n && n.endsWith("s") ? -4 : 4
            , i = n && n.endsWith("s") ? -2 : 2;
          return "M" + (t.x + i) + "," + t.y + " L" + (t.x + i + o) + "," + (t.y - 3) + " L" + (t.x + i + o) + "," + (t.y + 3) + " Z"
      }, Re = function(e, t) {
          var n = e.x - 2 + "," + e.y
            , a = t.x - 6 + "," + t.y;
          return e.x <= t.x - 4 ? "M" + n + " L" + (e.x - 6 + "," + e.y) + " L" + (e.x - 6 + "," + t.y) + " L" + a : "M" + n + " L" + (t.x - 10) + "," + e.y + " L" + (t.x - 10) + "," + t.y + " L" + a
      }, Fe = function(e, t) {
          if (e.x === t.x) {
              var n = e.y < t.y ? 6 : -6;
              return "M" + (e.x + 10 + "," + (e.y + n)) + " L" + (e.x + 10 + "," + t.y) + " L" + (t.x + 6 + "," + t.y)
          }
          if (e.x < t.x || e.x > t.x && e.x < t.x + 16) {
              n = t.y > e.y ? 16 : -16;
              return "M" + (e.x - 2 + "," + e.y) + " L" + (e.x - 6 + "," + e.y) + " L" + (e.x - 6 + "," + (e.y + n)) + " L" + (t.x + 10 + "," + (e.y + n)) + " L" + (t.x + 10 + "," + t.y) + " L" + (t.x + 6 + "," + t.y)
          }
          return "M" + (e.x - 2) + "," + e.y + " L" + (t.x + 10) + "," + e.y + " L" + (t.x + 10) + "," + t.y + " L" + (t.x + 6) + "," + t.y
      }, Pe = function(e, t) {
          var n = e.x + 2 + "," + e.y;
          if (e.x === t.x) {
              var a = e.y < t.y ? -14 : 14;
              return "M" + n + " L" + (e.x + 6 + "," + e.y) + " L" + (e.x + 6 + "," + (t.y + a))
          }
          if (e.x > t.x || e.x < t.x && e.x + 16 > t.x) {
              a = t.y > e.y ? 16 : -16;
              return "M" + n + " L" + (e.x + 6 + "," + e.y) + " L" + (e.x + 6 + "," + (e.y + a)) + " L" + (t.x - 10 + "," + (e.y + a)) + " L" + (t.x - 10 + "," + t.y) + " L" + (t.x - 6 + "," + t.y)
          }
          return "M" + n + " L" + (e.x + 6) + "," + e.y + " L" + (e.x + 6) + "," + t.y + " L" + (t.x - 6) + "," + t.y
      }, Be = function(e, t) {
          if (e.x < t.x)
              return "M" + (e.x - 10 + "," + (e.y + (t.y > e.y ? 6 : -6))) + " L" + (e.x - 10 + "," + (e.y + (t.y > e.y ? 16 : -16))) + " L" + (t.x + 10 + "," + (e.y + (t.y > e.y ? 16 : -16))) + " L" + (t.x + 10 + "," + t.y) + " L" + (t.x + 6 + "," + t.y);
          if (e.x >= t.x && e.x < t.x + 4)
              return "M" + (e.x + 2 + "," + e.y) + " L" + (t.x + 10 + "," + e.y) + " L" + (t.x + 10 + "," + t.y) + " L" + (t.x + 6 + "," + t.y);
          var n = e.y < t.y ? -14 : 14;
          return "M" + (e.x + 2) + "," + e.y + " L" + (e.x + 6) + "," + e.y + " L" + (e.x + 6) + "," + (t.y + n) + " L" + (t.x + 10) + "," + (t.y + n) + "L" + (t.x + 10) + "," + t.y + " L" + (t.x + 6) + "," + t.y
      }, Le = n("CybbHIxh"), Ve = n.n(Le), $e = Object(o.memo)(function(e) {
          var t, n = e.taskDependency, a = n.payload, r = n.position, c = r.lower, l = r.upper, s = Object(p.q)(), m = s.outlineSize$, b = s.chartScrollLeft$, g = s.dependencyLineMouseOver$, v = s.dependencyLineMouseOut$, h = s.project$, O = s.criticalPathVisible$, j = s.criticalPath$, y = s.scrollTop$, k = s.mainRef$, _ = s.viewDisplayMode$, w = Object(f.c)(m, function(e, t) {
              return e.width === t.width
          }), E = Object(f.c)(y, function(e, t) {
              return e === t
          }), x = Object(f.c)(_) === be.a.loose ? 18 : 15, C = Boolean(Object(fe.g)(function() {
              return O.pipe(Object(d.switchMap)(function(e) {
                  return e ? j.pipe(Object(d.map)(function(e) {
                      return !!e && e.dependencyIds.has(a.id)
                  })) : Object(me.of)(!1)
              }))
          }, [])), I = Object(f.c)(h), S = Object(o.useRef)(null), M = {
              dependencyManage: Object(f.m)(function() {
                  return T.a.define({
                      project: I
                  }).can(T.a.Action.DependencyManage)
              }, [I])
          }, N = u()(Ve.a["task-dependency-line"], ((t = {})[Ve.a.disabled] = !C && !M.dependencyManage,
          t[Ve.a.invalid] = !C && !Object(p.l)(e.taskDependency),
          t[Ve.a.critical] = C,
          t));
          Object(o.useEffect)(function() {
              if (M.dependencyManage) {
                  var t = Object(Me.fromEvent)(S.current, "mouseover")
                    , n = Object(Me.fromEvent)(S.current, "mouseout")
                    , a = t.pipe(Object(d.switchMap)(function(e) {
                      var t = 191;
                      if (k.value) {
                          var a = k.value.getBoundingClientRect().top;
                          t = a
                      }
                      return Object(Ne.timer)(300).pipe(Object(d.map)(function(n) {
                          return {
                              value: n,
                              x: e.clientX - w.width - 20,
                              y: e.clientY - t
                          }
                      }), Object(d.takeUntil)(n))
                  }), Object(d.tap)(function(t) {
                      g.next({
                          x: t.x + b.value,
                          y: t.y + E,
                          ganttTaskDependency: e.taskDependency
                      })
                  })).subscribe();
                  return function() {
                      return a.unsubscribe()
                  }
              }
          }, [e.taskDependency, M.dependencyManage, E, w.width, b.value, g, k.value]),
          Object(o.useEffect)(function() {
              if (M.dependencyManage) {
                  var e = Object(Me.fromEvent)(S.current, "mouseout").pipe(Object(d.switchMap)(function() {
                      return Object(Ne.timer)(300)
                  }), Object(d.tap)(function() {
                      return v.next()
                  })).subscribe();
                  return function() {
                      return e.unsubscribe()
                  }
              }
          }, [M.dependencyManage, v]);
          var D, R, F, P = (D = {
              x: c.x,
              y: c.y + x
          },
          R = {
              x: l.x,
              y: l.y + x
          },
          (F = a.kind) === Te.a.ss ? Re(D, R) : F === Te.a.sf ? Fe(D, R) : F === Te.a.fs ? Pe(D, R) : F === Te.a.ff ? Be(D, R) : "M " + D.x + "," + D.y + " L " + R.x + "," + R.y), B = function(t) {
              M.dependencyManage && g.next({
                  x: t.nativeEvent.offsetX + b.value,
                  y: t.nativeEvent.offsetY,
                  ganttTaskDependency: e.taskDependency
              })
          };
          return i.a.createElement("g", {
              ref: S,
              stroke: "#bfbfbf",
              fill: "#bfbfbf",
              className: N
          }, i.a.createElement("path", {
              onClick: B,
              stroke: "rgba(0, 0, 0, 0)",
              fill: "none",
              strokeWidth: "5",
              d: P
          }), i.a.createElement("path", {
              onClick: B,
              fill: "none",
              d: P,
              strokeWidth: "1",
              className: Ve.a.line
          }), function() {
              if (!P)
                  return null;
              var e = De({
                  x: c.x,
                  y: c.y + x
              }, {
                  x: l.x,
                  y: l.y + x
              }, a.kind);
              return i.a.createElement("path", {
                  name: "arrow",
                  strokeWidth: "1",
                  d: e,
                  className: Ve.a.arrow
              })
          }())
      }, function(e, t) {
          return e.taskDependency === t.taskDependency && e.position === t.position
      }), Ae = n("Jn+s4VF4"), qe = {
          normal: "#EDF9FF",
          overdue: "#FFEFED",
          done: _.colors.$gray01,
          group: _.colors.$gray06
      }, ze = i.a.memo(function() {
          var e = Object(p.q)().visibleTasks$
            , t = Object(f.c)(e).filter(function(e) {
              return "group" === e.kind || "task" === e.kind
          }).map(function(e) {
              return i.a.createElement(Ue, {
                  key: "group" === e.kind ? String(e.payload.value) : e.payload.id,
                  task: e
              })
          });
          return i.a.createElement(Ae.a, null, i.a.createElement(i.a.Fragment, null, t))
      }), Ue = function(e) {
          var t = e.task
            , n = Object(p.q)()
            , a = n.scenarioFieldConfigs$
            , r = n.viewDisplayMode$
            , c = Object(f.c)(a)
            , l = Object(f.c)(r)
            , s = Object(o.useMemo)(function() {
              return "task" === t.kind && Object(p.i)(t.payload, c)
          }, [t.payload, c, t.kind])
            , u = Object(o.useMemo)(function() {
              return Object(p.j)(t) && !s ? 26 : 10
          }, [t, s])
            , d = Object(p.g)(t)
            , m = d.minLowerX
            , b = d.maxUpperX
            , g = Object(o.useMemo)(function() {
              return b - m >= u ? b : m + u
          }, [b, m, u]);
          if (!Object(p.j)(t))
              return null;
          if (m === Number.POSITIVE_INFINITY || g === Number.NEGATIVE_INFINITY)
              return null;
          var v = t.position.lower.y + 10;
          if ("task" === t.kind && t.payload.start && t.payload.end && m >= t.position.lower.x && g <= t.position.upper.x)
              return null;
          var h = g - m
            , O = l === be.a.loose && "group" !== t.kind ? 16 : 8
            , j = "\n    M" + (g - 2) + "," + v + "\n    l" + (m - g + 4) + ",0\n    c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934\n    c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066\n    l0," + (O + 7 - 1.35) + "\n    l6,-7\n    l" + (h - 12) + ",0\n    l6,7\n    l0,-" + (O + 7 - 1.35) + "\n    c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045\n    c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z\n  "
            , y = "group" === t.kind ? String(t.payload.value) : t.payload.id;
          return i.a.createElement("g", {
              key: y
          }, i.a.createElement("path", {
              fill: Xe(t),
              d: j
          }))
      }, Xe = function(e) {
          return "group" === e.kind ? qe.group : e.payload.isDone ? qe.done : e.payload.end && j()().isAfter(e.payload.end) ? qe.overdue : qe.normal
      }, Ge = {
          color: "#f0f0f0"
      }, Ke = {
          color: "#F7F7F7",
          opacity: .5
      }, He = {
          color: "#FFA941",
          opacity: .3
      }, We = Object(o.memo)(function() {
          var e = Object(p.q)()
            , t = e.visibleDateTimes$
            , n = e.totalHeight$
            , a = e.workdays$
            , r = e.calendar$
            , c = e.now$
            , l = e.pxPerMs$
            , s = Object(f.c)(t)
            , u = Object(f.c)(a)
            , d = Object(f.c)(r)
            , m = Object(f.c)(l)
            , b = Object(f.c)(c)
            , g = Object(o.useMemo)(function() {
              var e = new Map;
              return null == d || d.personalizations.forEach(function(t) {
                  e.set(j()(t.start).startOf("day").valueOf(), t.kind)
              }),
              function(t) {
                  return e.get(t.valueOf())
              }
          }, [d])
            , v = Object(o.useMemo)(function() {
              return function(e) {
                  var t = g(e);
                  return t ? "workday" === t : u.has(e.isoWeekday())
              }
          }, [g, u])
            , h = Object(f.c)(n, function(e, t) {
              return e === t
          });
          return i.a.createElement(i.a.Fragment, null, s && s.minor.map(function(e) {
              var t = e.position;
              return i.a.createElement("g", {
                  stroke: Ge.color,
                  key: t.lower.x
              }, i.a.createElement("path", {
                  d: "M" + (t.lower.x + .5) + ",0 L" + t.lower.x + "," + h
              }), Ye(e, h, v(e.payload)), Je(e, h, b, m, d))
          }))
      }), Ye = function(e, t, n) {
          var a = e.position;
          return n || "day" !== e.scale ? null : i.a.createElement("rect", {
              fill: Ke.color,
              opacity: Ke.opacity,
              strokeWidth: 0,
              x: a.lower.x,
              y: 0,
              width: a.upper.x - a.lower.x,
              height: t
          })
      }, Je = function(e, t, n, a, o) {
          var c = e.scale
            , l = e.position;
          if (!Object(p.k)(e.dateRange))
              return null;
          var s = c === r.c.day ? 8 : 4
            , u = c === r.c.day ? l.lower.x + .5 * (l.upper.x - l.lower.x - s) : Object(p.m)(n, a, o);
          return i.a.createElement("rect", {
              fill: He.color,
              opacity: He.opacity,
              strokeWidth: 0,
              x: u,
              y: 0,
              width: s,
              height: t
          })
      }, Qe = function() {
          var e = Object(p.q)()
            , t = e.taskChangeDateRangeIndicator$
            , n = e.totalHeight$
            , a = Object(f.c)(t)
            , r = Object(f.c)(n, function(e, t) {
              return e === t
          })
            , c = Object(o.useMemo)(function() {
              if (!a)
                  return 0;
              var e = a.upperX - a.lowerX;
              return e > 8 ? e : 8
          }, [a]);
          if (!a)
              return null;
          var l = "both" === a.kind || "lower" === a.kind ? i.a.createElement("path", {
              d: "M" + a.lowerX + ",0 L" + a.lowerX + "," + r
          }) : null
            , s = "both" === a.kind || "upper" === a.kind ? i.a.createElement("path", {
              d: "M" + (a.lowerX + c) + ",0 L" + (a.lowerX + c) + "," + r
          }) : null;
          return i.a.createElement("g", {
              fill: "rgba(204, 236, 255, 0.3)",
              stroke: "#87D2FF"
          }, l, i.a.createElement("rect", {
              x: a.lowerX,
              y: 0,
              width: c,
              height: r,
              strokeWidth: 0
          }), s)
      }, Ze = n("nBSNr7Yr"), et = n.n(Ze), tt = function(e) {
          var t = Object(p.q)()
            , n = t.visibleTaskDependencies$
            , a = t.chartScrollLeft$
            , r = Object(f.c)(n)
            , o = Object(f.c)(a, function(e, t) {
              return e === t
          });
          return i.a.createElement("svg", {
              className: et.a["chart-svg-renderer"],
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: e.width,
              height: e.height,
              viewBox: o + " 0 " + e.width + " " + e.height
          }, i.a.createElement(We, null), i.a.createElement(ze, null), r.map(nt), i.a.createElement(Qe, null))
      }, nt = function(e) {
          return i.a.createElement($e, {
              key: e.payload.id,
              taskDependency: e,
              position: e.position
          })
      }, at = n("GESwhXbR"), rt = n("mpzOoqCm"), ot = n.n(rt), it = at.Balloon.Tooltip, ct = function(e) {
          var t, n = e._taskId, a = Object(p.q)(), r = a.taskDateRangePreview$, c = a.viewDisplayMode$, l = Object(f.c)(r), s = Object(f.c)(c) === be.a.loose, d = Object(o.useMemo)(function() {
              return l ? l.upperX - l.lowerX : 0
          }, [l]), m = Object(o.useMemo)(function() {
              return l ? {
                  left: l.lowerX,
                  width: d,
                  transform: "translateY(" + l.lowerY + "px)",
                  backgroundColor: p.a.normal,
                  borderColor: p.c.normal
              } : {}
          }, [l, d]), b = u()(ot.a.block, ((t = {})[ot.a.loose] = s,
          t));
          if (!l || n !== l._taskId)
              return null;
          var g = i.a.createElement("div", {
              className: b,
              style: m
          }, i.a.createElement("div", {
              className: ot.a.date,
              style: {
                  right: d + 12
              }
          }, Object(H.formatDate)(l.dateRange.lower).dateString), i.a.createElement("div", {
              className: ot.a.date,
              style: {
                  left: d + 12
              }
          }, Object(H.formatDate)(l.dateRange.upper).dateString));
          return i.a.createElement(it, {
              trigger: g,
              type: "primary",
              align: "t"
          }, k.a.get("gantt.chart.withoutDate"))
      }, lt = n("eFbPB9K3"), st = n.n(lt), ut = Object(o.memo)(function(e) {
          var t, n = Object(p.q)(), a = n.taskChangeDateRange$, r = n.taskRowTriggerMouseEvent$, c = n.taskDateRangePreview$, l = n.chartScrollLeft$, s = n.taskChangeDateRangeIndicator$, d = n.viewDisplayMode$, m = Object(f.m)(function() {
              return T.a.define({
                  task: e.task.payload.tbTask
              }).can(T.a.Action.EditTaskStartDate)
          }, [e.task.payload]), b = Object(f.m)(function() {
              return T.a.define({
                  task: e.task.payload.tbTask
              }).can(T.a.Action.EditTaskDueDate)
          }, [e.task.payload]), g = m && b && !Object(fe.e)(e.task.payload.tbTask), v = Object(f.c)(l), h = Object(f.c)(d) === be.a.loose, O = {
              left: v,
              transform: "translateY(" + e.task.position.lower.y + "px)"
          }, j = u()(st.a["task-row-trigger"], ((t = {})[st.a.disabled] = !g,
          t[st.a.loose] = h,
          t)), y = {
              mousedown: function(t) {
                  g && !A(e.task.payload) && (t.stopPropagation(),
                  a.next({
                      event: t.nativeEvent,
                      task: e.task,
                      kind: "upper"
                  }))
              },
              mouseenter: Object(o.useCallback)(function(t) {
                  g && r.next({
                      event: t.nativeEvent,
                      task: e.task
                  })
              }, [e.task, g, r]),
              mouseleave: Object(o.useCallback)(function() {
                  g && (c.next(null),
                  s.next(null))
              }, [g, c, s])
          };
          return i.a.createElement("div", {
              onMouseDown: y.mousedown,
              onMouseLeave: y.mouseleave
          }, i.a.createElement("div", {
              style: O,
              className: j,
              onMouseMove: y.mouseenter
          }), i.a.createElement(ct, {
              _taskId: e.task.payload.id
          }))
      }, function(e, t) {
          return e.task === t.task && e.lowerY === t.lowerY
      }), dt = n("wScl0p2y"), pt = function() {
          var e = Object(p.q)().visibleTasks$
            , t = Object(M.__read)(Object(o.useState)([]), 2)
            , n = t[0]
            , a = t[1];
          return Object(o.useEffect)(function() {
              var t = e.pipe(Object(d.map)(function(e) {
                  return e.filter(function(e) {
                      return "task" === e.kind && !A(e.payload)
                  })
              }), Object(d.tap)(a)).subscribe();
              return function() {
                  return t.unsubscribe()
              }
          }, [e]),
          i.a.createElement(dt.ErrorBoundary, null, i.a.createElement(i.a.Fragment, null, n.map(ft)))
      }, ft = function(e) {
          return i.a.createElement(ut, {
              key: e.payload.id,
              task: e,
              lowerY: e.position.lower.y
          })
      }, mt = n("VW1y/8oM"), bt = n("s0r7VfKc"), gt = n("dGKGBuPD"), vt = n("E6Ma3vtq"), ht = n("Eza+Xah9"), Ot = function(e) {
          var t = Object(p.q)()
            , n = t.chartScrollLeft$
            , a = t.chartSize$
            , r = t.taskChangeDateRange$
            , i = t.pxPerMs$
            , c = t.calendar$
            , l = t.patchOne
            , s = t.taskChangeDateRangeIndicator$
            , u = t.scenarioFieldConfigs$
            , f = t.scrollTo;
          Object(o.useEffect)(function() {
              if (e.current) {
                  var t, o = e.current, m = r.pipe(Object(d.tap)(function(e) {
                      t = function(e) {
                          var r, d, m;
                          t && (t(),
                          t = void 0);
                          var g = void 0
                            , v = o.getBoundingClientRect().left
                            , h = e.task
                            , O = e.kind
                            , y = i.value
                            , k = c.value;
                          e.event.preventDefault();
                          var _ = Object(vt.l)(e.event.clientX - v + n.value, y, k)
                            , w = {
                              start: h.payload.start,
                              end: h.payload.end
                          }
                            , E = (null === (r = h.payload.start) || void 0 === r ? void 0 : r.toISOString()) || null
                            , x = (null === (d = h.payload.end) || void 0 === d ? void 0 : d.toISOString()) || null
                            , C = null !== (m = h.payload.effort) && void 0 !== m ? m : k ? Object($.b)(E, x, k) : null
                            , I = e.event.clientX
                            , S = w;
                          if (!A(h.payload)) {
                              var M = Object(vt.l)(e.event.clientX - v + n.value, y, k)
                                , N = M - _
                                , T = U("init", h.payload, M, N, k, z(Object(p.h)(y).minor), null);
                              if (T) {
                                  var D = T.lower
                                    , R = T.upper;
                                  h.payload.start = D,
                                  h.payload.end = R,
                                  S.start = D,
                                  S.end = R,
                                  l(h.payload),
                                  s.next({
                                      kind: O,
                                      lowerX: T.lower ? Object(vt.k)(T.lower.valueOf(), y, k) : 0,
                                      upperX: T.upper ? Object(vt.k)(T.upper.valueOf(), y, k) : 0,
                                      dateRange: T,
                                      _taskId: h.payload.id
                                  })
                              }
                          }
                          var F = function(e) {
                              return !isNaN(I) && Math.abs(e - I) >= 4
                          }
                            , P = function(e) {
                              if (q(),
                              s.next(null),
                              F(e.clientX) || !h.payload.tbTask.startDate || !h.payload.tbTask.dueDate) {
                                  var t, a = e.clientX - v + n.value, r = Object(vt.l)(a, y, k), o = r - _;
                                  if (g = Object(vt.g)(h.payload, u.value)) {
                                      if (t = U("both", S, r, o, void 0, z(Object(p.h)(y).minor), null)) {
                                          var i = t.upper.clone().add(-1, "ms")
                                            , c = t.upper;
                                          h.payload.start = i,
                                          h.payload.end = c,
                                          m = {
                                              dueDate: c.toISOString()
                                          },
                                          l(h.payload),
                                          bt.default.updateTask(h.payload.id, m).subscribe(gt.noop, function() {
                                              h.payload.start = w.start,
                                              h.payload.end = w.end,
                                              null !== C && (h.payload.effort = C),
                                              l(h.payload)
                                          }),
                                          b.a.gta.event({
                                              action: "update task startDate&dueDate",
                                              method: "drag",
                                              page: "gantt page"
                                          })
                                      }
                                  } else if (t = U(O, S, r, o, k, z(Object(p.h)(y).minor), C)) {
                                      var d = g ? null : t.lower.toISOString()
                                        , f = t.upper.toISOString();
                                      h.payload.start = d ? j()(d) : void 0,
                                      h.payload.end = j()(f);
                                      var m = t.effort ? {
                                          startDate: d,
                                          dueDate: f,
                                          effort: t.effort
                                      } : {
                                          startDate: d,
                                          dueDate: f,
                                          effort: k ? Object($.b)(d, f, k) : null
                                      };
                                      bt.default.updateTask(h.payload.id, m).subscribe(gt.noop, function() {
                                          h.payload.start = w.start,
                                          h.payload.end = w.end,
                                          null !== C && (h.payload.effort = C),
                                          l(h.payload)
                                      }),
                                      b.a.gta.event({
                                          action: "update task startDate&dueDate",
                                          method: "drag",
                                          page: "gantt page"
                                      }),
                                      ht.a.event({
                                          action: "gantt.createTask.stage2.setTime.success",
                                          mode: "gantt"
                                      })
                                  }
                              }
                              var g;
                              F(e.clientX) || ((g = Object(vt.g)(h.payload, u.value)) && h.payload.tbTask.dueDate || h.payload.tbTask.startDate && h.payload.tbTask.dueDate) && b.a.APP.openTaskPreviewer(h.payload.id, {
                                  hasLink: !1,
                                  hasNavigator: !0
                              })
                          }
                            , B = function(e) {
                              if (e.preventDefault(),
                              e.stopImmediatePropagation(),
                              e.stopPropagation(),
                              F(e.clientX)) {
                                  var t = e.clientX - v
                                    , r = t + n.value
                                    , o = t < 20 ? "l" : t > a.value.width - 20 ? "r" : null;
                                  L(o);
                                  var i = Object(vt.g)(h.payload, u.value);
                                  if (A(h.payload) || i) {
                                      var c, d = Object(vt.l)(r, y, k), f = d - _;
                                      if (i) {
                                          if (c = U("both", S, d, f, void 0, z(Object(p.h)(y).minor), null)) {
                                              var m = c.upper.clone().add(-1, "ms")
                                                , b = c.upper;
                                              h.payload.start = m,
                                              h.payload.end = b,
                                              l(h.payload),
                                              s.next({
                                                  kind: "both",
                                                  lowerX: Object(vt.k)(b.clone().startOf("day").valueOf(), y, k),
                                                  upperX: Object(vt.k)(b.valueOf(), y, k),
                                                  dateRange: c,
                                                  _taskId: h.payload.id
                                              })
                                          }
                                      } else if (c = U(O, S, d, f, k, z(Object(p.h)(y).minor), C)) {
                                          var g = c.lower
                                            , j = c.upper;
                                          h.payload.start = i ? void 0 : g,
                                          h.payload.end = j,
                                          l(h.payload),
                                          s.next({
                                              kind: O,
                                              lowerX: c.lower ? Object(vt.k)(c.lower.valueOf(), y, k) : 0,
                                              upperX: c.upper ? Object(vt.k)(c.upper.valueOf(), y, k) : 0,
                                              dateRange: c,
                                              _taskId: h.payload.id
                                          })
                                      }
                                  }
                              }
                          }
                            , L = function(e) {
                              if (V(),
                              e) {
                                  var t = "l" === e ? -20 : 20;
                                  f(n.value + t),
                                  g = window.requestAnimationFrame(function() {
                                      g = void 0,
                                      L(e)
                                  })
                              }
                          }
                            , V = function() {
                              void 0 !== g && (window.cancelAnimationFrame(g),
                              g = void 0)
                          };
                          document.addEventListener("mousemove", B, !0),
                          document.addEventListener("mouseup", P);
                          var q = function() {
                              V(),
                              window.document.removeEventListener("mouseup", P),
                              window.document.removeEventListener("mousemove", B, !0)
                          };
                          return t
                      }(e)
                  })).subscribe();
                  return function() {
                      m.unsubscribe(),
                      t && t()
                  }
              }
          }, [e, c, n, l, i, u, r, s, a, f])
      }, jt = n("nDX4a7AE"), yt = n("ki1b9Z12"), kt = n.n(yt), _t = n("gfJw/2s3"), wt = n.n(_t), Et = function(e) {
          return i.a.createElement(_.TitledDropdown, Object(M.__assign)({}, e, {
              className: wt.a["setting-titled-dropdown"],
              contentCls: wt.a["content-container"],
              titleCls: wt.a["title-container"],
              placement: "top-start"
          }), e.children)
      }, xt = n("buZnghp2"), Ct = n.n(xt), It = function(e) {
          return i.a.createElement("div", {
              className: Ct.a["delete-confirm-container"]
          }, i.a.createElement("div", {
              className: Ct.a.content
          }, k.a.get("gantt.task.dependency.delete.description")), i.a.createElement("div", {
              className: Ct.a["button-wrap"]
          }, i.a.createElement(_.Button, {
              danger: !0,
              onClick: e.onClick
          }, k.a.get("gantt.task.dependency.delete.confirm"))))
      }, St = n("4f2Qvecq"), Mt = n("CYJibKqy"), Nt = function(e) {
          return i.a.createElement(St.b, {
              style: {
                  width: "unset",
                  padding: "24px 20px 12px"
              },
              lagTime: e.ganttTaskDependency.lag,
              postTaskName: e.ganttTaskDependency.to.content,
              dependencyKind: Tt(e.ganttTaskDependency.kind),
              onSubmit: function(t) {
                  e.onSubmit(t)
              }
          })
      }, Tt = function(e) {
          if (e === Te.a.sf)
              return Mt.a.SF;
          if (e === Te.a.ss)
              return Mt.a.SS;
          if (e === Te.a.fs)
              return Mt.a.FS;
          if (e === Te.a.ff)
              return Mt.a.FF;
          throw new Error("toDependencyKind unreached: " + e)
      }, Dt = function(e) {
          var t = e.onClick;
          return i.a.createElement(_.Tooltip, {
              title: k.a.get("gantt.task.dependency.date.setting"),
              delay: 1
          }, i.a.createElement(_.Icon, {
              name: "clock",
              onClick: t
          }))
      }, Rt = function(e) {
          var t = e.onClick;
          return i.a.createElement(_.Tooltip, {
              title: k.a.get("gantt.task.dependency.delete"),
              delay: 1
          }, i.a.createElement(_.Icon, {
              name: "trash",
              onClick: t
          }))
      }, Ft = function(e) {
          var t = function() {
              e.setMenuVisible(!1)
          };
          return i.a.createElement("div", {
              className: kt.a["task-dependency-menu"],
              style: {
                  left: e.position.x - 28,
                  top: e.position.y - 12
              },
              onMouseOver: e.onMouseOver,
              onMouseOut: e.onMouseOut
          }, i.a.createElement(Et, {
              title: k.a.get("lag.time.title"),
              content: i.a.createElement(Nt, {
                  ganttTaskDependency: e.ganttTaskDependency.payload,
                  onSubmit: function(t) {
                      t !== e.ganttTaskDependency.payload.lag && e.onUpdate(e.ganttTaskDependency.payload.id, {
                          lagTime: t
                      }),
                      e.setMenuVisible(!1)
                  }
              }),
              offset: "-6, -24",
              onHide: t
          }, i.a.createElement(Dt, null)), i.a.createElement("span", {
              className: kt.a.divider
          }), i.a.createElement(Et, {
              title: k.a.get("gantt.task.dependency.delete.title"),
              content: i.a.createElement(It, {
                  onClick: e.onDelete
              }),
              offset: "-34, -24",
              onHide: t
          }, i.a.createElement(Rt, null)))
      }, Pt = function() {
          var e = Object(p.q)()
            , t = e.dependencyLineMouseOver$
            , n = e.dependencyLineMouseOut$
            , a = Object(M.__read)(Object(o.useState)(!1), 2)
            , r = a[0]
            , c = a[1]
            , l = Object(M.__read)(Object(o.useState)({
              x: 0,
              y: 0
          }), 2)
            , s = l[0]
            , u = l[1]
            , f = Object(M.__read)(Object(o.useState)(null), 2)
            , b = f[0]
            , g = f[1]
            , v = Object(o.useRef)(!1);
          Object(o.useEffect)(function() {
              var e = t.pipe(Object(d.tap)(function(e) {
                  var t = e.x
                    , n = e.y
                    , a = e.ganttTaskDependency;
                  r || (c(!0),
                  u({
                      x: t,
                      y: n
                  }),
                  g(a))
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [r]),
          Object(o.useEffect)(function() {
              var e = n.pipe(Object(d.tap)(function() {
                  v.current || c(!1)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [v]);
          return r && b ? i.a.createElement(Ft, {
              ganttTaskDependency: b,
              position: s,
              onMouseOver: function() {
                  v.current = !0
              },
              onMouseOut: function() {
                  v.current = !1,
                  Object(me.of)(!0).pipe(Object(d.switchMap)(function() {
                      return Object(Ne.timer)(300)
                  }), Object(d.tap)(function() {
                      return n.next()
                  })).subscribe()
              },
              onDelete: function() {
                  b && bt.default.deleteTaskDependency(b.payload.id).pipe(Object(d.tap)(function() {
                      return c(!1)
                  }), Object(d.tap)(function() {
                      m.gta.event({
                          action: "deleted task dependency",
                          page: "gantt page",
                          category: "bar"
                      })
                  })).subscribe()
              },
              onUpdate: function(e, t) {
                  bt.default.updateTaskDependency(e, t).subscribe()
              },
              setMenuVisible: c
          }) : null
      }, Bt = n("ySKXX5B7"), Lt = n.n(Bt), Vt = function(e) {
          var t = Object(p.q)()
            , n = t.chartScrollLeft$
            , a = t.dependencyCreate$
            , r = t.scrollTop$
            , o = Object(f.c)(n, function(e, t) {
              return e === t
          })
            , c = Object(f.c)(a)
            , l = Object(f.c)(r, function(e, t) {
              return e === t
          })
            , s = c ? {
              x: c.from.x,
              y: c.from.y
          } : {
              x: 0,
              y: 0
          }
            , u = c ? {
              x: c.to.x + o,
              y: c.to.y + l
          } : {
              x: 0,
              y: 0
          };
          return c ? i.a.createElement("svg", {
              className: Lt.a["task-dependency-create"],
              xmlns: "http://www.w3.org/2000/svg",
              version: "1.1",
              width: e.width,
              height: e.height,
              viewBox: o + " 0 " + e.width + " " + e.height
          }, i.a.createElement("g", {
              strokeWidth: "2",
              stroke: "#1B9AEE",
              fill: "#1B9AEE"
          }, i.a.createElement("path", {
              fill: "none",
              d: "M" + s.x + "," + s.y + " L" + u.x + "," + u.y
          }), i.a.createElement("polygon", {
              points: u.x + "," + u.y + " " + (u.x - 8) + "," + (u.y - 6) + " " + (u.x - 8) + "," + (u.y + 6),
              transform: "rotate(" + $t(c.from, u) + " " + u.x + " " + u.y + ")",
              strokeWidth: "0"
          }))) : null
      }, $t = function(e, t) {
          return Math.atan2(t.y - e.y, t.x - e.x) * (180 / Math.PI)
      }, At = n("Z/IHPVBh"), qt = n("pFBw0vn2"), zt = n.n(qt), Ut = function() {
          var e = Object(p.q)()
            , t = e.outlineSize$
            , n = e.chartSize$
            , a = e.consumeChartWheelEvent
            , c = e.commitChartMouseEvent
            , l = e.chartScrollLeft$
            , s = e.totalHeight$
            , u = e.dependencyCreate$
            , m = Object(f.c)(s)
            , g = Object(o.useRef)(null)
            , v = Object(o.useRef)(null)
            , h = Object(f.c)(t, function(e, t) {
              return e.width === t.width
          })
            , O = Object(f.c)(n, function(e, t) {
              return e.width === t.width
          })
            , j = Object(o.useMemo)(function() {
              return {
                  wheel: function(e) {
                      return a(e)
                  },
                  mouseDown: function(e) {
                      return c(e.nativeEvent, g.current)
                  },
                  mouseUp: function(e) {
                      return c(e, g.current)
                  }
              }
          }, [g]);
          return Object(o.useEffect)(function() {
              var e = l.pipe(Object(d.distinctUntilChanged)(), Object(d.tap)(function(e) {
                  v.current && (v.current.style.transform = "translateX(" + -e + "px)")
              }), Object(d.tap)(function() {
                  u.value && u.next(null)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [g]),
          function() {
              var e = Object(p.q)()
                , t = e.chartScrollLeft$
                , n = e.dependencyCreate$
                , a = e.dependencyCreateMouseDown$
                , i = e.dependencyCreateMouseUp$
                , c = e.scrollTop$
                , l = e.viewDisplayMode$
                , s = Object(f.c)(t, function(e, t) {
                  return e === t
              })
                , u = Object(f.c)(c, function(e, t) {
                  return e === t
              });
              Object(o.useEffect)(function() {
                  var e = Object(Me.fromEvent)(document, "mousemove")
                    , t = Object(Me.fromEvent)(document, "mouseup")
                    , o = a.pipe(Object(d.tap)(function(e) {
                      return e.event.preventDefault()
                  }), Object(d.switchMap)(function(a) {
                      var o = a.event
                        , c = a.task
                        , p = a.kind;
                      return e.pipe(Object(d.map)(function(e) {
                          var t = l.value === be.a.loose ? 19 : 15
                            , n = p === r.a.start ? {
                              x: c.position.lower.x - 28,
                              y: c.position.lower.y + t
                          } : {
                              x: c.position.upper.x + 28,
                              y: c.position.lower.y + t
                          };
                          return {
                              from: n,
                              to: {
                                  x: n.x + e.clientX - o.clientX - s,
                                  y: n.y + e.clientY - o.y - u
                              },
                              _fromTaskId: c.payload.id
                          }
                      }), Object(d.takeUntil)(Object(mt.merge)(t.pipe(Object(d.tap)(function() {
                          return n.next(null)
                      })), i.pipe(Object(d.tap)(function() {
                          return n.next(null)
                      }), Object(d.filter)(function(e) {
                          var t = e.task;
                          return c.payload.id !== t.payload.id
                      }), Object(d.tap)(function(e) {
                          var t = e.task
                            , n = e.kind;
                          bt.default.createTaskDependency({
                              kind: p + "_" + n,
                              _fromId: c.payload.id,
                              _toId: t.payload.id
                          }).subscribe()
                      }), Object(d.tap)(function() {
                          b.a.gta.event({
                              action: "created task dependency",
                              page: "gantt page",
                              category: "bar"
                          })
                      })))), Object(d.catchError)(function(e) {
                          return _.Toast.error({
                              message: e.message
                          }),
                          e
                      }))
                  }), Object(d.tap)(function(e) {
                      var t = e.from
                        , a = e.to
                        , r = e._fromTaskId;
                      return n.next({
                          from: t,
                          to: a,
                          _fromTaskId: r
                      })
                  })).subscribe();
                  return function() {
                      return o.unsubscribe()
                  }
              }, [s, u, n, a, i, l])
          }(),
          Ot(g),
          function(e) {
              var t = Object(p.q)()
                , n = t.chartScrollLeft$
                , a = t.taskRowTriggerMouseEvent$
                , r = t.pxPerMs$
                , i = t.calendar$
                , c = t.taskDateRangePreview$
                , l = t.taskChangeDateRangeIndicator$;
              Object(o.useEffect)(function() {
                  if (e.current) {
                      var t = e.current
                        , o = a.pipe(Object(d.tap)(function(e) {
                          var a = t.getBoundingClientRect().left
                            , o = e.task
                            , s = r.value
                            , u = i.value;
                          e.event.preventDefault();
                          var d = e.event.clientX - a + n.value
                            , p = Object(vt.l)(d, s, u);
                          if (!A(o.payload)) {
                              var f = Object(vt.l)(e.event.clientX - a + n.value, s, u)
                                , m = f - p
                                , b = U("init", o.payload, f, m, u, z(Object(jt.b)(s).minor), null);
                              b && (l.next({
                                  kind: "both",
                                  lowerX: b.lower ? Object(vt.k)(b.lower.valueOf(), s, u) : 0,
                                  upperX: b.upper ? Object(vt.k)(b.upper.valueOf(), s, u) : 0,
                                  dateRange: b,
                                  _taskId: o.payload.id
                              }),
                              c.next({
                                  lowerX: b.lower ? Object(vt.k)(b.lower.valueOf(), s, u) : 0,
                                  upperX: b.upper ? Object(vt.k)(b.upper.valueOf(), s, u) : 0,
                                  lowerY: o.position.lower.y + 10,
                                  dateRange: b,
                                  _taskId: o.payload.id
                              }))
                          }
                      })).subscribe();
                      return function() {
                          return o.unsubscribe()
                      }
                  }
              }, [e, i, n, c, r, l, a])
          }(g),
          i.a.createElement("div", {
              ref: function(e) {
                  e !== g.current && (g.current && (g.current.removeEventListener("wheel", j.wheel),
                  window.document.removeEventListener("mouseup", j.mouseUp)),
                  g.current = e,
                  g.current && (g.current.addEventListener("wheel", j.wheel),
                  window.document.addEventListener("mouseup", j.mouseUp)))
              },
              className: zt.a.chart,
              style: {
                  left: h.width,
                  height: m,
                  width: O.width
              },
              onMouseDown: j.mouseDown
          }, i.a.createElement(tt, {
              height: m,
              width: O.width
          }), i.a.createElement("div", {
              ref: v,
              className: zt.a["render-chunk"],
              style: {
                  height: m
              }
          }, i.a.createElement(_e, null), i.a.createElement(Ie, null), i.a.createElement(Pt, null), i.a.createElement(pt, null)), i.a.createElement(Vt, {
              height: m,
              width: O.width
          }), i.a.createElement(At.Metrics.End, {
              code: At.Metrics.Code.Gantt,
              chunk: 1
          }))
      }, Xt = n("kemlH0yS"), Gt = n.n(Xt), Kt = function(e) {
          return e === r.c.halfYear ? k.a.get("gantt.timeAxis.scale." + r.c.year) : k.a.get("gantt.timeAxis.scale." + e)
      }, Ht = [{
          label: Kt(r.c.day),
          value: V.d.day,
          key: "day"
      }, {
          label: Kt(r.c.week),
          value: V.d.week,
          key: "week"
      }, {
          label: Kt(r.c.month),
          value: V.d.month,
          key: "month"
      }, {
          label: Kt(r.c.quarter),
          value: V.d.quarter,
          key: "quarter"
      }, {
          label: Kt(r.c.halfYear),
          value: V.d.halfYear,
          key: "halfYear"
      }], Wt = function(e) {
          return e + ".time.axios.scale"
      }, Yt = function(e) {
          var t = e.text
            , n = e.onClick;
          return i.a.createElement("div", {
              className: Gt.a.trigger,
              onClick: n
          }, i.a.createElement("div", {
              className: Gt.a.text
          }, t), i.a.createElement(at.Icon, {
              type: "triangle-down-s"
          }))
      }, Jt = function(e) {
          var t, n = e._projectId, a = Object(o.useRef)(null), r = Object(p.q)(), c = r.pxPerMs$, l = r.commitPxPerMs, s = r.chartScrollLeft$, m = Object(f.c)(c), g = Object(M.__read)(Object(o.useState)(!1), 2), v = g[0], h = g[1], O = u()(Gt.a.shadow, ((t = {})[Gt.a.scrolling] = v,
          t));
          Object(o.useEffect)(function() {
              var e = function(e) {
                  var t = Wt(e);
                  return fe.f.get(t) || Ht[0].value
              }(n);
              l(e)
          }, [n]),
          Object(o.useEffect)(function() {
              var e = s.pipe(Object(d.tap)(function() {
                  return h(!0)
              }), Object(d.debounceTime)(500), Object(d.tap)(function() {
                  return h(!1)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, []);
          var j = Object(o.useMemo)(function() {
              return Ht.find(function(e) {
                  return e.value === m
              })
          }, [m])
            , y = Object(o.useCallback)(function(e) {
              l(e),
              function(e, t) {
                  var n = Wt(e);
                  fe.f.set(n, t)
              }(n, e),
              b.a.gta.event({
                  action: "switch view perspective",
                  type: j && j.key,
                  page: "gantt page"
              })
          }, [n])
            , _ = Object(o.useMemo)(function() {
              var e = j || Ht[0];
              return k.a.get("gantt.timeAxis.scale.label", e.label)
          }, [j]);
          return i.a.createElement("div", {
              className: Gt.a["time-axis-scale-select"],
              ref: a
          }, i.a.createElement(at.Select, {
              trigger: i.a.createElement(Yt, {
                  text: _
              }),
              width: 86,
              onChange: y,
              defaultValue: Ht[0],
              value: j,
              dataSource: Ht,
              popupContainer: function() {
                  return a.current
              }
          }), i.a.createElement("div", {
              className: O
          }))
      }, Qt = Object(o.createContext)({
          rowKey: function() {
              return null
          },
          columnKey: function() {
              return null
          },
          renderHeadConfig: function() {
              return null
          },
          renderHeadCell: function() {
              return null
          },
          renderBodyRowMenu: function() {
              return null
          },
          renderBodyRowToggler: function() {
              return null
          },
          renderBodyRowHandle: function() {
              return null
          },
          renderBodyCell: function() {
              return null
          },
          renderFoot: function() {
              return null
          }
      }), Zt = n("ci+LRLOK"), en = n("Wf9BNPLz"), tn = n.n(en), nn = function(e) {
          return i.a.createElement("div", {
              className: tn.a.placeholder
          }, i.a.createElement("div", {
              className: tn.a.image
          }), i.a.createElement("div", {
              className: tn.a.title
          }, k.a.get("gantt.app.outline.placeholder.task.title")), i.a.createElement("div", {
              className: tn.a.des
          }, k.a.get("gantt.app.outline.placeholder.task.des")), i.a.createElement(_.Button, {
              onClick: e.onTaskCreate
          }, k.a.get("gantt.app.outline.placeholder.task.create")))
      }, an = function(e) {
          var t = e.column
            , n = e.index
            , a = Object(p.q)().outlineCellResize$
            , r = Object(f.c)(a)
            , c = Object(o.useCallback)(function(r) {
              "number" == typeof r && (e.onColumnResize(t, r),
              a.next({
                  column: n,
                  eventType: "drag"
              }))
          }, [t, n])
            , l = Object(o.useCallback)(function() {
              return a.next(null)
          }, [])
            , s = Object(o.useCallback)(function() {
              r && "drag" === r.eventType || a.next({
                  column: n,
                  eventType: "hover"
              })
          }, [r, n])
            , u = Object(o.useCallback)(function() {
              r && "hover" === r.eventType && a.next(null)
          }, [r]);
          return i.a.createElement(Zt.b, Object(M.__assign)({}, e, {
              onResize: c,
              onResizeEnd: l,
              onHandleMouseEnter: s,
              onHandleMouseLeave: u
          }), e.children)
      }, rn = 38, on = 32, cn = n("iVIWjDWd"), ln = function(e, t, n) {
          var a = function(e) {
              for (var t = new Map, n = e.parent; n; )
                  t.set(n.depth, n),
                  n = null == n ? void 0 : n.parent;
              return t.set(e.depth, e),
              t
          }(t);
          a.forEach(function(t, n) {
              t !== e && "root" !== t.kind || a.delete(n)
          });
          for (var r = n; r >= 1; r--) {
              var o = r - 1
                , i = a.get(o);
              if (i)
                  return i
          }
      }, sn = function(e) {
          var t = Object(p.q)()
            , n = t.outlineBodyRowHandleMouseDown$
            , a = t.outlineTaskDragIndicator$
            , r = t.mainRef$
            , i = t.getTaskAt
            , c = t.outlineRowDragEnd$
            , l = t.setTaskCollapsed
            , s = t.outlineRowIndex$
            , u = t.pxPerRow$
            , b = t.sortBy$
            , g = Object(f.c)(r)
            , v = Object(f.c)(s)
            , h = Object(f.c)(u)
            , O = Object(M.__read)(Object(o.useState)(void 0), 2)
            , j = O[0]
            , y = O[1];
          Object(o.useEffect)(function() {
              cn.ProjectAccess.hasAdminAuthority(e).then(y)
          }, [e]),
          Object(o.useEffect)(function() {
              if (g && e && void 0 !== j) {
                  var t = function() {
                      return "pos" === b.value.key && j
                  }
                    , r = Object(Me.fromEvent)(document, "mousemove").pipe(Object(d.filter)(t))
                    , o = Object(Me.fromEvent)(document, "mouseup")
                    , s = n.pipe(Object(d.switchMap)(function(e) {
                      var n = e.dragRow
                        , s = n.collapsed;
                      return r.pipe(Object(d.tap)(function() {
                          n.collapsed || "task" !== n.kind || l(n.payload.id, !0)
                      }), Object(d.tap)(function(e) {
                          var t = g.getBoundingClientRect()
                            , r = e.clientX - t.left
                            , o = e.clientY - t.top + g.scrollTop
                            , c = Object(p.n)(o, h)
                            , l = i(c);
                          if (l && "foot" !== l.kind) {
                              var s, u = v.width + on, d = r - u, f = Math.min((s = d / rn,
                              Math.max(0, Math.floor(s)) + 2), l.depth + 1), m = ln(n, l, f);
                              if (m) {
                                  var b = function(e, t) {
                                      if (e !== t) {
                                          for (var n = e; n && n.parent !== t; )
                                              n = n.parent;
                                          return n
                                      }
                                  }(l, m)
                                    , O = b ? b.nextSibling : m.firstChild
                                    , j = function(e, t) {
                                      return e * t
                                  }(m.depth + 1 - 2, rn) + u + 5
                                    , y = Object(p.o)(O ? O.index : b ? b.index + 1 : m.index + 1, h)
                                    , k = {
                                      type: "childList",
                                      target: m,
                                      prevSibling: b,
                                      nextSibling: O,
                                      addedNodes: [n]
                                  };
                                  a.next({
                                      record: k,
                                      left: j,
                                      top: y
                                  })
                              }
                          }
                      }), Object(d.takeUntil)(o.pipe(Object(d.tap)(function() {
                          a.value || "task" === n.kind && (m.APP.openTaskPreviewer(n.payload.id, {
                              hasLink: !1,
                              hasNavigator: !0,
                              isUsePanel: m.PREFERENCE.getIsUsePanelToOpenObject()
                          }),
                          m.gta.event({
                              action: "opened task menu",
                              page: "gantt page",
                              category: "gantt page"
                          }))
                      }), Object(d.tap)(function() {
                          var e;
                          t() && (null === (e = a.value) || void 0 === e ? void 0 : e.record) && c.next(a.value.record)
                      }), Object(d.tap)(function() {
                          t() && ("task" === n.kind && l(n.payload.id, s),
                          a.next(null))
                      }))))
                  })).subscribe();
                  return function() {
                      return s.unsubscribe()
                  }
              }
          }, [g, v.switch, i, n, c, a, l, v.width, h, b, j, e])
      }, un = n("GLdMNDVn"), dn = n.n(un), pn = function(e) {
          var t = Object(p.q)().outlineTaskDragIndicator$
            , n = Object(f.c)(t);
          if (sn(e.projectId),
          !n)
              return null;
          var a = n ? {
              left: n.left,
              top: n.top
          } : void 0;
          return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
              className: dn.a.mask
          }), i.a.createElement("div", {
              className: dn.a["drag-indicator"],
              style: a
          }))
      }, fn = n("gh8QIhMV"), mn = n("wA8z6RSR"), bn = function(e) {
          return void 0 !== e && "task" === e.kind
      }, gn = function(e) {
          return bn(e.prevSibling) && bn(e.nextSibling) ? Math.round(e.nextSibling.payload.pos + e.prevSibling.payload.pos) / 2 : bn(e.prevSibling) && !bn(e.nextSibling) ? e.prevSibling.payload.pos + 1e4 : !bn(e.prevSibling) && bn(e.nextSibling) ? e.nextSibling.payload.pos - 1e4 : 0
      }, vn = function() {
          var e = Object(p.q)()
            , t = e.outlineRowDragEnd$
            , n = e.setPos
            , a = e.setSortBy;
          Object(o.useEffect)(function() {
              var e = t.pipe(Object(d.tap)(function(e) {
                  var t, a, r, o, i = e.addedNodes, c = Object(M.__read)(i, 1)[0], l = e.target;
                  if (c.parent !== l) {
                      var s;
                      if ("group" === l.kind) {
                          if ("_stageId" === l.payload.key) {
                              var u = l.payload.value;
                              s = "task" === (null === (t = c.parent) || void 0 === t ? void 0 : t.kind) ? bt.default.fetch.updateTaskStage(c.payload.id, {
                                  _stageId: u,
                                  doTransform: !0
                              }) : bt.default.fetch.updateTaskStage(c.payload.id, {
                                  _stageId: u
                              })
                          } else if ("_tasklistId" === l.payload.key) {
                              var d = l.payload.value;
                              s = bt.default.fetch.getTasklistFetch(d).switchMap(function(e) {
                                  var t, n = Object(M.__read)(e.stageIds, 1)[0];
                                  return "task" === (null === (t = c.parent) || void 0 === t ? void 0 : t.kind) ? bt.default.updateTaskStage(c.payload.id, {
                                      _stageId: n,
                                      doTransform: !0
                                  }) : bt.default.updateTaskStage(c.payload.id, {
                                      _stageId: n
                                  })
                              })
                          } else if ("_sprintId" === l.payload.key) {
                              var p = l.payload.value;
                              if ("task" === (null === (a = c.parent) || void 0 === a ? void 0 : a.kind)) {
                                  var f = c.payload._taskflowstatusId
                                    , m = c.payload._scenariofieldconfigId;
                                  s = Object(mn.i)(c.payload.id, f, m, p, !0)
                              } else
                                  s = Object(mn.h)(c.payload.id, p)
                          } else if ("_executorId" === l.payload.key) {
                              var b = "null" === l.payload.value ? null : l.payload.value;
                              if ("task" === (null === (r = c.parent) || void 0 === r ? void 0 : r.kind))
                                  if (c.payload.tbTask._taskflowstatusId) {
                                      f = c.payload._taskflowstatusId,
                                      m = c.payload._scenariofieldconfigId;
                                      s = Object(mn.i)(c.payload.id, f, m, void 0, !0)
                                  } else
                                      s = bt.default.fetch.updateTaskStage(c.payload.id, {
                                          _stageId: c.payload.tbTask._stageId,
                                          doTransform: !0
                                      });
                              else
                                  s = bt.default.updateTask(c.payload.id, {
                                      _executorId: b
                                  })
                          } else if ("_taskflowstatusId" === l.payload.key) {
                              f = l.payload.value;
                              s = "task" === (null === (o = c.parent) || void 0 === o ? void 0 : o.kind) ? bt.default.fetch.updateTaskTaskflowStatus(c.payload.id, f, void 0, void 0, !0) : bt.default.fetch.updateTaskTaskflowStatus(c.payload.id, f)
                          }
                      } else
                          "task" === l.kind && (s = Object(mn.g)(c.payload.id, l.payload.id));
                      null == s || s.subscribe({
                          complete: function() {
                              var t = gn(e);
                              n(new Map([[c.payload.id, t]]))
                          },
                          error: fn.throwError
                      })
                  } else if (function(e) {
                      var t = Object(M.__read)(e.addedNodes || [], 1)[0];
                      return t !== e.prevSibling && t !== e.nextSibling
                  }(e)) {
                      var g = gn(e);
                      n(new Map([[c.payload.id, g]]))
                  }
              })).subscribe(function() {
                  m.gta.event({
                      action: "sorted task",
                      page: "gantt page",
                      category: "outline"
                  })
              });
              return function() {
                  return e.unsubscribe()
              }
          }, [t, n, a])
      }, hn = n("MxIDUOBp"), On = n("m7vwaL1T"), jn = n.n(On), yn = Object(o.memo)(function(e) {
          var t, n = e.row, a = e.hovered, r = e.collapsed, c = e.columns, l = e.onColumnResize, s = Object(o.useContext)(Qt), d = Object(p.q)(), m = d.outlineCellResize$, b = d.outlineRowIndex$, g = d.setTaskCollapsed, v = Object(f.c)(m), h = Object(f.c)(b);
          function O() {
              var e = {
                  backgroundSize: rn,
                  width: (n.depth - 2) * rn
              }
                , t = "task" === n.kind || "draft" === n.kind
                , a = t && i.a.createElement("div", {
                  className: jn.a["row-handle"]
              }, s.renderBodyRowHandle(n))
                , o = t && i.a.createElement("div", {
                  className: jn.a["row-menu"]
              }, s.renderBodyRowMenu(n));
              return i.a.createElement("div", {
                  className: jn.a["row-before"],
                  style: {
                      paddingLeft: h.width + on
                  }
              }, function() {
                  if ("off" === h.switch)
                      return null;
                  if ("task" !== n.kind && "draft" !== n.kind)
                      return i.a.createElement("div", {
                          className: jn.a["row-index"]
                      });
                  return i.a.createElement("div", {
                      style: {
                          width: h.width
                      },
                      className: jn.a["row-index"],
                      title: "" + n.seq
                  }, n.seq)
              }(), i.a.createElement("div", {
                  className: jn.a["row-indentation"],
                  style: e
              }), i.a.createElement("div", {
                  className: jn.a["row-menu-and-toggler"]
              }, o, 0 === n.childCount ? null : i.a.createElement("div", {
                  className: jn.a["row-toggler"],
                  onClick: function() {
                      "task" === n.kind ? g(n.payload.id, !r) : "group" === n.kind && g(n.payload.value, !r)
                  }
              }, s.renderBodyRowToggler(n))), a)
          }
          var j = {};
          return "group" !== n.kind && "foot" !== n.kind && (j["data-row"] = "robot-guide"),
          i.a.createElement("div", Object(M.__assign)({}, j, {
              className: u()(jn.a.row, (t = {
                  hovered: a
              },
              t[jn.a.done] = "task" === n.kind && !!n.payload.isDone,
              t)),
              style: {
                  top: n.position.lower.y,
                  height: n.position.upper.y - n.position.lower.y
              }
          }), c.map(function(e, t) {
              var a = s.columnKey(e)
                , r = u()(jn.a.cell, v && v.column === t ? jn.a["resize-active"] : jn.a["resize-default"]);
              return i.a.createElement(an, {
                  key: null === a ? t : a,
                  className: r,
                  column: e,
                  index: t,
                  width: e.width,
                  minWidth: e.minWidth,
                  direction: Zt.a.Right,
                  onColumnResize: l
              }, 0 === t ? O() : null, s.renderBodyCell(n, e))
          }))
      }, function(e, t) {
          return e.row === t.row && e.y === t.y && e.collapsed === t.collapsed && e.hovered === t.hovered && e.columns === t.columns
      });
      function kn() {
          var e = Object(o.useRef)(null)
            , t = Object(o.useRef)(null)
            , n = Object(p.q)()
            , a = n.outlineScrollLeft$
            , r = n.consumeOutlineWheelEvent
            , i = Object(f.c)(a);
          return Object(o.useLayoutEffect)(function() {
              var t = e.current;
              if (t)
                  return t.addEventListener("wheel", r, {
                      passive: !1
                  }),
                  function() {
                      return t.removeEventListener("wheel", r)
                  }
          }, [r]),
          Object(o.useEffect)(function() {
              var t = e.current;
              t && (t.scrollLeft = i)
          }, [i]),
          [e, t]
      }
      function _n(e) {
          return Object(o.useMemo)(function() {
              return e.reduce(function(e, t) {
                  return e + t.width
              }, 0)
          }, [e])
      }
      var wn = function(e) {
          var t = Object(o.useContext)(Qt)
            , n = Object(p.q)()
            , a = n.outlineSize$
            , r = n.outlineCellResize$
            , c = n.allTaskCollapsed$
            , l = Object(f.c)(r)
            , s = Object(f.c)(a, function(e, t) {
              return e.width === t.width
          })
            , d = Object(f.c)(c)
            , m = Object(M.__read)(kn(), 2)
            , b = m[0]
            , g = m[1]
            , v = _n(e.columns);
          return i.a.createElement("div", {
              ref: b,
              className: jn.a.scrollable,
              style: {
                  width: s.width,
                  height: e.height
              }
          }, i.a.createElement("div", {
              ref: g,
              className: jn.a.head,
              style: {
                  width: v,
                  height: e.height
              }
          }, i.a.createElement("div", {
              className: jn.a.row,
              style: {
                  height: e.height
              }
          }, e.columns.map(function(a, r) {
              var o, c = t.columnKey(a), s = u()(jn.a.cell, l && l.column === r ? jn.a["resize-active"] : jn.a["resize-default"]);
              return i.a.createElement(an, {
                  key: null === c ? r : c,
                  column: a,
                  index: r,
                  onColumnResize: e.onColumnResize,
                  className: s,
                  width: a.width,
                  minWidth: a.minWidth,
                  direction: Zt.a.Right
              }, 0 === r ? i.a.createElement("div", {
                  className: jn.a.config
              }, t.renderHeadConfig()) : null, t.renderHeadCell(a), 0 === r ? (o = i.a.createElement("div", {
                  onClick: function() {
                      return n.toggleAllTaskCollapsed()
                  },
                  className: jn.a.suffix
              }, i.a.createElement(at.Icon, {
                  type: d ? "chevrons-expand-vertical" : "chevrons-collapse-vertical"
              })),
              i.a.createElement(at.Balloon.Tooltip, {
                  align: "t",
                  trigger: o
              }, d ? "全部展开" : "全部折叠")) : null)
          }))))
      }
        , En = function(e) {
          var t, n = Object(o.useContext)(Qt), a = Object(p.q)(), r = a.outlineSize$, c = a.totalHeight$, l = a.visibleTasks$, s = a.hoveredRow$, d = a.outlineCellResize$, m = a.outlineRowIndex$, b = a.project$, g = a.viewDisplayMode$, v = Object(f.c)(r, function(e, t) {
              return e.width === t.width
          }).width, h = Object(f.c)(c, function(e, t) {
              return e === t
          }), O = Object(f.c)(l, function(e, t) {
              return e === t
          }), j = Object(f.c)(s, function(e, t) {
              return e === t
          }), y = Object(M.__read)(kn(), 2), k = y[0], _ = y[1], w = _n(e.columns), E = Object(f.c)(d), x = Object(f.c)(b), C = x && x._id, I = Object(f.c)(g);
          function S(t, n) {
              return i.a.createElement("div", {
                  key: t,
                  className: jn.a.row,
                  style: n
              }, e.columns.map(function(t, n) {
                  var a = u()(jn.a.cell, E && E.column === n ? jn.a["resize-active"] : jn.a["resize-default"]);
                  return i.a.createElement(an, {
                      key: n,
                      className: a,
                      column: t,
                      index: n,
                      width: t.width,
                      minWidth: t.minWidth,
                      direction: Zt.a.Right,
                      onColumnResize: e.onColumnResize
                  })
              }))
          }
          Object(o.useEffect)(function() {
              if (C) {
                  var e = Object(hn.c)(C);
                  m.next(Object(M.__assign)(Object(M.__assign)({}, m.value), {
                      switch: Object(hn.b)(e)
                  }))
              }
          }, [C, m]),
          vn();
          var N = u()(jn.a.body, ((t = {})[jn.a["view-loose"]] = I === be.a.loose,
          t[jn.a["view-compact"]] = I === be.a.compact,
          t));
          return i.a.createElement(dt.ErrorBoundary, {
              name: "outline"
          }, i.a.createElement("div", {
              ref: k,
              className: jn.a.scrollable,
              style: {
                  width: v,
                  height: h
              }
          }, i.a.createElement("div", {
              ref: _,
              className: N,
              style: {
                  width: w,
                  height: h
              }
          }, function() {
              if (0 === O.length || 1 === O.length && O[0] && "foot" === O[0].kind)
                  return i.a.createElement(nn, {
                      onTaskCreate: e.onTaskCreate
                  });
              var t = S("first", {
                  top: 0,
                  height: V.b
              })
                , a = S("last", {
                  top: O[O.length - 1].position.upper.y,
                  height: V.c
              });
              return [t].concat(O.map(function(t) {
                  var a = n.rowKey(t);
                  return i.a.createElement(yn, {
                      key: a || void 0,
                      onColumnResize: e.onColumnResize,
                      columns: e.columns,
                      row: t,
                      y: t.position.lower.y,
                      hovered: t.index === j,
                      collapsed: t.collapsed
                  })
              }).concat(a))
          }(), C && i.a.createElement(pn, {
              projectId: C
          }))))
      }
        , xn = n("6ACC1KoE")
        , Cn = n.n(xn)
        , In = Object(o.memo)(function() {
          var e, t = Object(p.q)(), n = t.outlineSize$, a = t.now$, r = t.dateRange$, c = t.seek, l = t.chartScrollLeft$, s = Object(M.__read)(Object(o.useState)(!1), 2), m = s[0], b = s[1], g = Object(f.c)(n, function(e, t) {
              return e.width === t.width
          }), v = Object(f.c)(a), h = Object(f.c)(r), O = Object(o.useMemo)(function() {
              return !!h && v < h.lower.valueOf()
          }, [v, h]), j = Object(o.useMemo)(function() {
              return !!h && v > h.upper.valueOf()
          }, [v, h]), y = Object(o.useMemo)(function() {
              return O || j
          }, [j, O]), w = Object(o.useMemo)(function() {
              return {
                  left: O ? g.width : "unset",
                  right: j ? 111 : "unset",
                  display: y ? void 0 : "none"
              }
          }, [g, y, O, j]), E = u()(Cn.a["move-to-today"], ((e = {})[Cn.a.scrolling] = m,
          e)), x = Object(o.useCallback)(function() {
              return c(a.value)
          }, [a.value, c]);
          return Object(o.useEffect)(function() {
              var e = l.pipe(Object(d.tap)(function() {
                  return b(!0)
              }), Object(d.debounceTime)(300), Object(d.tap)(function() {
                  return b(!1)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [l]),
          i.a.createElement(_.Button, {
              onClick: x,
              size: "smaller",
              type: "secondary",
              style: w,
              className: E
          }, O && i.a.createElement(_.Icon, {
              name: "circle-arrow-left-o"
          }), k.a.get("today"), j && i.a.createElement(_.Icon, {
              name: "circle-arrow-right-o"
          }))
      })
        , Sn = n("o+ltSccZ")
        , Mn = n.n(Sn)
        , Nn = function() {
          var e = Object(p.q)()
            , t = e.chartSize$
            , n = e.outlineSize$
            , a = e.now$
            , r = e.chartScrollLeft$
            , c = e.pxPerMs$
            , l = e.calendar$
            , s = e.scrollTo
            , u = Object(f.c)(t, Tn).width
            , d = Object(f.c)(n, Tn).width
            , m = Object(f.c)(a)
            , b = Object(f.c)(r)
            , g = Object(f.c)(c)
            , v = Object(f.c)(l)
            , h = u - 16
            , O = Object(o.useRef)(0)
            , j = Object(o.useRef)(0)
            , y = Object(o.useRef)(0)
            , k = Rn(m, g, v, h, b);
          O.current = k.thumbX,
          j.current = k.thumbWidth,
          y.current = k.contentWidth;
          var _ = Object(o.useMemo)(function() {
              var e = 0;
              return {
                  onDragStart: function() {
                      e = O.current
                  },
                  onDragMove: function(n) {
                      var r = Dn(a.value, c.value, l.value, t.value.width, j.current, e + n.x, y.current);
                      s(r.chartScrollLeft)
                  }
              }
          }, [s, a, c, l, t, j, y])
            , w = Fn(_);
          return i.a.createElement("div", {
              className: Mn.a["h-scroll-bar"],
              style: {
                  width: h,
                  left: d
              }
          }, i.a.createElement("div", Object(M.__assign)({}, w, {
              className: Mn.a.thumb,
              style: {
                  width: j.current,
                  left: O.current
              }
          })))
      }
        , Tn = function(e, t) {
          return e.width === t.width
      }
        , Dn = function(e, t, n, a, r, o, i) {
          var c = a - r
            , l = Math.max(0, Math.min(o, c)) / c
            , s = (2 * l - 1) * i;
          return {
              diff: s,
              offset: l,
              chartScrollLeft: Object(p.m)(e, t, n) - a / 2 + s
          }
      }
        , Rn = function(e, t, n, a, r) {
          var o = r - (Object(p.m)(e, t, n) - a / 2)
            , i = Math.abs(o) + a
            , c = Math.max(i, 3 * a)
            , l = a / (c / a);
          return {
              thumbX: (o / c + 1) / 2 * (a - l),
              thumbWidth: l,
              contentWidth: c
          }
      }
        , Fn = function(e) {
          var t = e.onDragStart
            , n = e.onDragMove
            , a = Object(M.__read)(Object(o.useState)(!1), 2)
            , r = a[0]
            , i = a[1]
            , c = Object(o.useRef)({
              x: 0,
              y: 0
          })
            , l = Object(o.useCallback)(function(e) {
              var t = e.clientX - c.current.x
                , a = e.clientY - c.current.y;
              n({
                  x: t,
                  y: a
              })
          }, [n, c])
            , s = Object(o.useCallback)(function() {
              i(!1)
          }, []);
          return Object(o.useEffect)(function() {
              return r && (document.addEventListener("mousemove", l),
              document.addEventListener("mouseup", s)),
              function() {
                  document.removeEventListener("mousemove", l),
                  document.removeEventListener("mouseup", s)
              }
          }, [r, l, s]),
          {
              draggable: !1,
              onMouseDown: function(e) {
                  e.preventDefault(),
                  c.current.x = e.clientX,
                  c.current.y = e.clientY,
                  i(!0),
                  t()
              }
          }
      }
        , Pn = n("cBx9Vv7/")
        , Bn = n.n(Pn)
        , Ln = Object(o.memo)(function() {
          var e = Object(p.q)()
            , t = e.pxPerRow$
            , n = e.hoveredRow$
            , a = Object(o.useRef)(null);
          return Object(o.useEffect)(function() {
              var e = t.pipe(Object(d.combineLatest)(n), Object(d.tap)(function(e) {
                  var t = Object(M.__read)(e, 2)
                    , n = t[0]
                    , r = t[1];
                  a.current && (isNaN(r) ? a.current.style.display = "none" : (a.current.style.display = "block",
                  a.current.style.height = n + "px",
                  a.current.style.top = Object(p.o)(r, n) + "px"))
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [a]),
          i.a.createElement("div", {
              ref: a,
              className: Bn.a["selection-indicator"]
          })
      })
        , Vn = n("R4ZXC841")
        , $n = n.n(Vn)
        , An = n("JHERnZ6M")
        , qn = n.n(An)
        , zn = function() {
          var e = Object(p.q)().baseline$
            , t = Object(f.c)(e);
          return t && i.a.createElement("div", {
              className: qn.a["baseline-tip"]
          }, k.a.get("gantt.baseline.current", t.title), i.a.createElement(at.Button, {
              onClick: function() {
                  e.next(null)
              }
          }, k.a.get("gantt.baseline.exit")))
      }
        , Un = n("Bqj0TC0x")
        , Xn = n.n(Un)
        , Gn = function() {
          var e, t = Object(p.q)(), n = t.outlineSize$, a = t.chartScrollLeft$, r = Object(f.c)(n, function(e, t) {
              return e.width === t.width
          }), c = Object(M.__read)(Object(o.useState)(!1), 2), l = c[0], s = c[1];
          Object(o.useEffect)(function() {
              var e = a.pipe(Object(d.tap)(function() {
                  return s(!0)
              }), Object(d.debounceTime)(500), Object(d.tap)(function() {
                  return s(!1)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [a]);
          var m = {
              left: r.width - 8,
              width: 8
          }
            , b = u()(Xn.a["scroll-indicator"], ((e = {})[Xn.a.scrolling] = l,
          e));
          return i.a.createElement("div", {
              style: m,
              className: b
          })
      }
        , Kn = n("IeiFIDTg")
        , Hn = n("LjwqhMwd")
        , Wn = n.n(Hn)
        , Yn = function() {
          var e, t = Object(p.q)(), n = t.dateRange$, a = t.seek, r = t.chartScrollLeft$, c = t.scrollTop$, l = t.outlineSize$, s = t.chartSize$, m = t.criticalPath$, b = t.pxPerRow$, g = t.getRows, v = t.getView, h = t.commitScrollTop, O = Object(M.__read)(Object(o.useState)(!1), 2), j = O[0], y = O[1], w = Object(f.c)(l, function(e, t) {
              return e.width === t.width
          }), E = Object(f.c)(s, function(e, t) {
              return e.width === t.width
          }), x = Object(f.c)(n), C = Object(f.c)(m), I = Object(f.c)(c), S = Object(f.c)(b), N = Object(o.useMemo)(function() {
              var e = C ? Object(M.__spread)(C.taskIds.values()) : [];
              return e[e.length - 1]
          }, [C]), T = Object(o.useMemo)(function() {
              var e;
              if (N)
                  return null === (e = v()) || void 0 === e ? void 0 : e.rowManager.getTaskRow(N)
          }, [N, v]), D = Object(o.useMemo)(function() {
              return {
                  left: w.width + E.width / 2
              }
          }, [w, E]), R = Object(o.useMemo)(function() {
              var e;
              if (!x || !T)
                  return !1;
              var t = T.payload
                , n = t.start
                , a = t.end;
              if (!n || !a)
                  return !1;
              var r = Math.max(Object(p.n)(I, S), 0)
                , o = Math.min(Object(p.n)(I + E.height, S), (null === (e = g()) || void 0 === e ? void 0 : e.length) || 0);
              return n.valueOf() > x.upper.valueOf() || a.valueOf() < x.lower.valueOf() || T.index < r || T.index > o
          }, [x, T, I, E.height, g, S]), F = Object(o.useCallback)(function() {
              if (T) {
                  var e = T.payload
                    , t = e.start
                    , n = e.end;
                  if (t && n) {
                      var r = (t.valueOf() + n.valueOf()) / 2;
                      a(r),
                      h(Object(p.o)(T.index, S))
                  }
              }
          }, [T, a, h, S]);
          return Object(o.useEffect)(function() {
              var e = r.pipe(Object(d.tap)(function() {
                  return y(!0)
              }), Object(d.debounceTime)(300), Object(d.tap)(function() {
                  return y(!1)
              })).subscribe();
              return function() {
                  return e.unsubscribe()
              }
          }, [r]),
          R ? i.a.createElement(_.Button, {
              onClick: F,
              style: D,
              size: "smaller",
              type: "secondary",
              className: u()(Wn.a["move-to-last-task"], (e = {},
              e[Wn.a.scrolling] = j,
              e))
          }, k.a.get("gantt.criticalPath.description.jump")) : null
      }
        , Jn = function() {
          var e = Object(p.q)().criticalPathVisible$;
          return Object(f.c)(e) ? i.a.createElement(dt.ErrorBoundary, {
              name: "move-to-last-task"
          }, i.a.createElement(Yn, null)) : null
      }
        , Qn = function(e) {
          var t = Object(p.q)()
            , n = t.isScreenshoting$
            , a = Object(f.c)(n);
          Object(o.useEffect)(function() {
              t.setView(e.view)
          }, [e.view]),
          Object(o.useEffect)(function() {
              t.setScenarioFieldConfigs(e.scenarioFieldConfigs),
              t.setProject(e.project)
          }, [e.project, e.scenarioFieldConfigs]),
          Object(o.useEffect)(function() {
              t.setSearchersFilter(e.searchesFilter)
          }, [e.searchesFilter]);
          var r = Object(o.useRef)(null)
            , c = Object(o.useMemo)(function() {
              return {
                  scroll: function() {
                      t.commitScrollTop(r.current.scrollTop)
                  },
                  mouseMove: function(e) {
                      r.current && t.commitMouseEvent(e, r.current)
                  },
                  mouseLeave: function(e) {
                      r.current && t.commitMouseEvent(e, r.current)
                  }
              }
          }, [t, r]);
          Object(o.useEffect)(function() {
              var e = t.scrollTop$.pipe(Object(d.distinctUntilChanged)()).subscribe(function(e) {
                  r.current && (r.current.scrollTop = e)
              });
              return function() {
                  return e.unsubscribe()
              }
          }, [r]);
          var s = i.a.createElement("div", {
              id: "gantt-body",
              className: u()(e.className, $n.a.gantt)
          }, i.a.createElement(Gn, null), i.a.createElement("header", null, i.a.createElement(wn, {
              height: 56,
              columns: e.columns,
              onColumnResize: e.onColumnResize
          }), i.a.createElement(S, null)), i.a.createElement("main", {
              ref: function(e) {
                  e !== r.current && (t.mainRef$.next(e),
                  r.current && (r.current.removeEventListener("scroll", c.scroll),
                  r.current.removeEventListener("mousemove", c.mouseMove),
                  r.current.removeEventListener("mouseleave", c.mouseLeave)),
                  r.current = e,
                  r.current && (r.current.addEventListener("scroll", c.scroll),
                  r.current.addEventListener("mousemove", c.mouseMove),
                  r.current.addEventListener("mouseleave", c.mouseLeave)))
              }
          }, i.a.createElement(Ln, null), i.a.createElement(En, {
              columns: e.columns,
              onTaskCreate: function() {
                  e.onTaskCreate({})
              },
              onColumnResize: e.onColumnResize
          }), i.a.createElement(Ut, null)), i.a.createElement(h, null), i.a.createElement(Jt, {
              _projectId: e.project._id
          }), i.a.createElement(zn, null), i.a.createElement(In, null), i.a.createElement(Jn, null), Object(Kn.a)() && i.a.createElement(Nn, null), i.a.createElement(At.Metrics.Start, {
              code: At.Metrics.Code.Gantt
          }));
          Object(o.useEffect)(function() {
              var n = e.columns.reduce(function(e, t) {
                  return e + t.width
              }, 0);
              t.commitDividerPosition(n)
          }, [e.columns, t]);
          var m = Object(o.useCallback)(function(e, n) {
              a || ("number" == typeof e && t.commitWidth(e),
              "number" == typeof n && t.commitHeight(n - 100))
          }, [t, a]);
          return i.a.createElement(l.a, {
              handleWidth: !0,
              handleHeight: !0,
              onResize: m
          }, s)
      }
        , Zn = n("ayFg9gfF")
        , ea = function(e, t) {
          if (!e || !e.nextSibling)
              return e;
          var n = ta(e)
            , a = ea(e, t)
            , r = ea(n, t);
          return na(a, r, t)
      }
        , ta = function(e) {
          for (var t = e, n = e; t.nextSibling && t.nextSibling.nextSibling; )
              t = t.nextSibling.nextSibling,
              n = n.nextSibling;
          var a = n.nextSibling;
          return delete n.nextSibling,
          a
      }
        , na = function(e, t, n) {
          return e ? t ? n(e, t) <= 0 ? (e.nextSibling = na(e.nextSibling, t, n),
          e.nextSibling.prevSibling = e,
          delete e.prevSibling,
          e) : (t.nextSibling = na(e, t.nextSibling, n),
          t.nextSibling.prevSibling = t,
          delete t.prevSibling,
          t) : e : t
      }
        , aa = function() {
          function e(e) {
              this.columns = e,
              this.cache = this.createCache()
          }
          return e.prototype.createCache = function() {
              return this.columns.reduce(function(e, t) {
                  return e.set(t.key, t),
                  e
              }, new Map)
          }
          ,
          e.prototype.at = function(e) {
              return this.columns[e]
          }
          ,
          e.prototype.get = function(e) {
              return this.cache.get(e)
          }
          ,
          e.prototype.compare = function(e, t, n) {
              var a = this.get(n);
              return a && a.comparer ? a.comparer(e.payload, t.payload, n, e.depth) : ra(e.payload, t.payload, n)
          }
          ,
          e
      }()
        , ra = function(e, t, n) {
          var a = e[n]
            , r = t[n];
          return null == a && null != r ? 1 : null != a && null == r ? -1 : null == a && null == r ? 0 : a > r ? -1 : a < r ? 1 : 0
      }
        , oa = function() {
          function e(e, t) {
              this.doc = e,
              this.groupBy = t,
              this.groupRowsCache = this.createGroupRowCache(),
              this.taskRowsCache = this.createTaskRowCache(),
              this.draftRowsCache = this.createDraftRowCache(),
              this.rootRow = this.createRows()
          }
          return e.prototype.createRootRow = function() {
              return {
                  index: NaN,
                  seq: NaN,
                  collapsed: !1,
                  position: {
                      lower: {
                          x: 0,
                          y: 0
                      },
                      upper: {
                          x: 0,
                          y: 0
                      }
                  },
                  childCount: 0,
                  depth: 0,
                  kind: "root",
                  payload: {
                      content: "root",
                      pos: 0
                  }
              }
          }
          ,
          e.prototype.createFootRow = function(e) {
              return {
                  index: NaN,
                  seq: NaN,
                  collapsed: !1,
                  position: {
                      lower: {
                          x: 0,
                          y: 0
                      },
                      upper: {
                          x: 0,
                          y: 0
                      }
                  },
                  childCount: 0,
                  depth: 0,
                  kind: "foot",
                  payload: e
              }
          }
          ,
          e.prototype.createGroupRow = function(e) {
              return {
                  index: NaN,
                  seq: NaN,
                  collapsed: la(e.value),
                  position: {
                      lower: {
                          x: 0,
                          y: 0
                      },
                      upper: {
                          x: 0,
                          y: 0
                      }
                  },
                  childCount: 0,
                  depth: 0,
                  kind: "group",
                  payload: e
              }
          }
          ,
          e.prototype.createGroupRowCache = function() {
              var e, t = this, n = this.groupBy, a = null === (e = null == n ? void 0 : n.where) || void 0 === e ? void 0 : e.map(function(e, a) {
                  return [e, t.createGroupRow({
                      pos: a,
                      key: n.key,
                      content: "",
                      value: e
                  })]
              });
              return new Map(a)
          }
          ,
          e.prototype.createTaskRowCache = function() {
              var e = this.doc.tasks.map(function(e) {
                  return [e.id, {
                      index: NaN,
                      seq: NaN,
                      collapsed: la(e.id),
                      position: {
                          lower: {
                              x: 0,
                              y: 0
                          },
                          upper: {
                              x: 0,
                              y: 0
                          }
                      },
                      childCount: 0,
                      depth: 0,
                      kind: "task",
                      payload: e
                  }]
              });
              return new Map(e)
          }
          ,
          e.prototype.createDraftRowCache = function() {
              var e = this.doc.drafts.map(function(e) {
                  return [e.id, {
                      index: NaN,
                      seq: NaN,
                      collapsed: !1,
                      position: {
                          lower: {
                              x: 0,
                              y: 0
                          },
                          upper: {
                              x: 0,
                              y: 0
                          }
                      },
                      childCount: 0,
                      depth: 0,
                      kind: "draft",
                      payload: e
                  }]
              });
              return new Map(e)
          }
          ,
          e.prototype.createRows = function() {
              var e = this
                , t = this
                , n = t.doc
                , a = n.tasks
                , r = n.drafts
                , o = t.groupBy
                , i = t.groupRowsCache
                , c = t.taskRowsCache
                , l = t.draftRowsCache
                , s = this.createRootRow();
              if (0 === a.length && 0 === r.length)
                  return s;
              var u = function(t) {
                  var n = t.payload
                    , a = n.parentId && c.get(n.parentId);
                  if (a)
                      Object(Zn.a)(a, t);
                  else if (o) {
                      var r = n[o.key] || "null"
                        , l = i.get(r);
                      if (l)
                          Object(Zn.a)(l, t);
                      else if (!o.where) {
                          var u = e.createGroupRow({
                              pos: NaN,
                              key: o.key,
                              value: r,
                              content: ""
                          });
                          i.set(r, u),
                          Object(Zn.a)(u, t),
                          Object(Zn.a)(s, u)
                      }
                  } else
                      Object(Zn.a)(s, t)
              };
              return i.forEach(function(e) {
                  return Object(Zn.a)(s, e)
              }),
              c.forEach(u),
              l.forEach(u),
              (null == o ? void 0 : o.forEach) && i.forEach(o.forEach),
              i.forEach(function(t) {
                  if (!t.payload.disabled) {
                      var n = Object(M.__assign)(Object(M.__assign)({}, t.payload), {
                          pos: NaN
                      });
                      Object(Zn.a)(t, e.createFootRow(n))
                  }
              }),
              s
          }
          ,
          e.prototype.setCollapsed = function(e, t) {
              var n = this.groupRowsCache.get(e);
              if (n)
                  return Object(Zn.c)(n, function(e) {
                      return e.index = NaN,
                      !e.collapsed
                  }),
                  n.collapsed = t,
                  void ca(e, t);
              var a = this.taskRowsCache.get(e);
              return a ? (Object(Zn.c)(a, function(e) {
                  return e.index = NaN,
                  !e.collapsed
              }),
              a.collapsed = t,
              void ca(e, t)) : void 0
          }
          ,
          e.prototype.setAllTaskCollapsed = function(e) {
              Object(Zn.c)(this.rootRow, function(t) {
                  "task" === t.kind && t.childCount > 0 && (Object(Zn.c)(t, function(e) {
                      return e.index = NaN,
                      !t.collapsed
                  }),
                  t.collapsed = e,
                  ca(t.payload.id, e))
              })
          }
          ,
          e.prototype.getTaskRow = function(e) {
              return this.taskRowsCache.get(e)
          }
          ,
          e
      }()
        , ia = function(e) {
          return "collapsed." + e
      }
        , ca = function(e, t) {
          t ? fe.f.set(ia(e), JSON.stringify(t)) : fe.f.remove(ia(e))
      }
        , la = function(e) {
          return fe.f.has(ia(e))
      }
        , sa = function() {
          function e(e, t, n, a) {
              this.doc = e,
              this.columns = t,
              this.sortBy = n,
              this.groupBy = a,
              this.columnManager = new aa(this.columns),
              this.rowManager = new oa(this.doc,this.groupBy)
          }
          return Object.defineProperty(e.prototype, "rootRow", {
              get: function() {
                  return this.rowManager.rootRow
              },
              enumerable: !0,
              configurable: !0
          }),
          e.prototype.flatRows = function(e, t, n, a, r) {
              var o = this;
              void 0 === t && (t = function(e) {
                  return !!e.firstChild && !e.collapsed
              }
              ),
              void 0 === n && (n = function(e) {
                  return !e.collapsed
              }
              ),
              void 0 === a && (a = function(e) {
                  return "root" !== e.kind
              }
              ),
              void 0 === r && (r = function(e) {
                  return "task" === e.kind || "draft" === e.kind
              }
              );
              var i = []
                , c = new Map
                , l = 1
                , s = 0
                , u = this.sortBy;
              return Object(Zn.c)(e, function(e) {
                  r(e) && (e.seq = l++,
                  c.set(e.seq, e)),
                  n(e) && (e.firstChild = ea(e.firstChild, function(e, t) {
                      return function(e, t) {
                          if ("pos" !== u.key) {
                              if ("draft" === e.kind && "task" === t.kind)
                                  return 1;
                              if ("task" === e.kind && "draft" === t.kind)
                                  return -1
                          }
                          return "task" !== e.kind && "draft" !== e.kind || "task" !== t.kind && "draft" !== t.kind ? "group" === e.kind && "group" === t.kind ? da(e.payload, t.payload) : ua(e.kind, t.kind) : o.columnManager.compare(e, t, u.key) * u.order
                      }(e, t)
                  }))
              }),
              Object(Zn.c)(e, function(e) {
                  return a(e) && (e.index = s++,
                  i.push(e)),
                  t(e)
              }),
              {
                  rows: i,
                  seqCache: c
              }
          }
          ,
          e.prototype.createDepElements = function() {
              var e = this;
              return this.doc.deps.reduce(function(t, n) {
                  var a = e.rowManager.getTaskRow(n.fromId)
                    , r = e.rowManager.getTaskRow(n.toId);
                  return !a || isNaN(a.index) || !r || isNaN(r.index) ? t : (t.set(n.id, {
                      kind: "dep",
                      payload: n,
                      from: a,
                      to: r,
                      position: {
                          lower: {
                              x: 0,
                              y: 0
                          },
                          upper: {
                              x: 0,
                              y: 0
                          }
                      }
                  }),
                  t)
              }, new Map)
          }
          ,
          e.prototype.getResult = function(e, t) {
              var n = this.flatRows(this.rootRow, e, void 0, t);
              return {
                  rows: n.rows,
                  seqCache: n.seqCache,
                  deps: this.createDepElements()
              }
          }
          ,
          e.prototype.setCollapsed = function(e, t) {
              return this.rowManager.setCollapsed(e, t)
          }
          ,
          e.prototype.setAllTaskCollapsed = function(e) {
              return this.rowManager.setAllTaskCollapsed(e)
          }
          ,
          e
      }()
        , ua = function(e, t) {
          return "foot" === e && "foot" !== t ? 1 : "foot" !== e && "foot" === t ? -1 : 0
      }
        , da = function(e, t) {
          return isNaN(e.pos) && isNaN(t.pos) ? e.content === t.content ? 0 : e.content > t.content ? 1 : -1 : isNaN(e.pos) && !isNaN(t.pos) ? -1 : !isNaN(e.pos) && isNaN(t.pos) ? 1 : e.pos - t.pos
      }
        , pa = n("oRqJmROU")
        , fa = function() {
          function e(e, t, n, a) {
              void 0 === a && (a = new Map(e.map(function(e) {
                  return [e.id, e]
              }))),
              this.tasks = e,
              this.drafts = t,
              this.taskCache = a,
              this.deps = n.map(function(e) {
                  var t = a.get(e.fromId)
                    , n = a.get(e.toId);
                  if (t && t.start && t.end && n && n.start && n.end) {
                      var r = [t.start, t.end, n.start, n.end].filter(pa.e).map(ma);
                      return {
                          id: e.id,
                          fromId: e.fromId,
                          toId: e.toId,
                          lag: e.lag,
                          kind: e.kind,
                          from: t,
                          to: n,
                          start: j()(Math.min.apply(null, r)),
                          end: j()(Math.max.apply(null, r))
                      }
                  }
              }).filter(pa.e)
          }
          return e.prototype.getTask = function(e) {
              return this.taskCache.get(e)
          }
          ,
          e.prototype.createView = function(e) {
              return new sa(this,e.columns,e.sortBy,e.groupBy)
          }
          ,
          e
      }()
        , ma = function(e) {
          return e.valueOf()
      };
      n.d(t, "b", function() {
          return Qn
      }),
      n.d(t, "c", function() {
          return Qt
      }),
      n.d(t, "a", function() {
          return fa
      })
  },
  "q2/Fyv/c": function(e, t) {},
  "tNObh+Zv": function(e, t, n) {
      e.exports = n.p + "images/loose-active.0a901e14.svg"
  },
  "tdgGlFT/": function(e, t, n) {
      e.exports = {
          divider: "divider__3vA4",
          "icon-wrapper": "icon-wrapper__1ugp",
          arrow: "arrow__3Sjh",
          "vertical-disabled": "vertical-disabled__J9XJ",
          reverse: "reverse__3bNw"
      }
  },
  uRV6oCrj: function(e, t, n) {
      e.exports = n.p + "images/doing.6e222c3f.png"
  },
  uqr4ebdQ: function(e, t, n) {
      e.exports = {
          ellipsis: "ellipsis__1vZj",
          "body-row-toggler": "body-row-toggler__wvWq",
          "body-row-group": "body-row-group__3mDd",
          "body-row-handle": "body-row-handle__3tK0",
          "head-cell": "head-cell__3Ucf",
          "body-cell": "body-cell__OUd5",
          foot: "foot__1A82",
          clickable: "clickable__JUqf",
          empty: "empty__J1Mp",
          private: "private__1YSo",
          done: "done__275O",
          group: "group__K9Tp"
      }
  },
  v1nHPqK0: function(e, t, n) {
      e.exports = {
          "gantt-trial-mask": "gantt-trial-mask__3Sv-",
          "trial-dialog": "trial-dialog__1Qye",
          "trial-img": "trial-img__1Tsn",
          "trial-title": "trial-title__3fz1",
          "trial-des": "trial-des__nWKU",
          "trial-upgrade": "trial-upgrade__1Ets"
      }
  },
  vLerj38T: function(e, t, n) {
      e.exports = n.p + "images/baseline.866cc611.png"
  },
  xSjVTYm3: function(e, t, n) {
      e.exports = {
          "baseline-dialog-wrap": "baseline-dialog-wrap__1pTC",
          field: "field__ZApp",
          label: "label__1fB5",
          input: "input__1W7v"
      }
  },
  ySKXX5B7: function(e, t, n) {
      e.exports = {
          "task-dependency-create": "task-dependency-create__BIve"
      }
  },
  yZFmhshG: function(e, t, n) {
      e.exports = {
          default: "default__3VGg",
          disabled: "disabled__3DhW"
      }
  },
  ygmm7GRm: function(e, t, n) {
      e.exports = n.p + "images/group.f61ecd07.png"
  },
  "zQT/Em5X": function(e, t, n) {
      e.exports = n.p + "images/milestone-icon.ab107050.png"
  },
  zb7LTpkj: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
          return s
      });
      var a = n("D57KnuyU")
        , r = n("cDcdfi41")
        , o = n("s0r7VfKc")
        , i = n("CB9K9K++")
        , c = n("OMreQJJ/")
        , l = n("bmJY4Ofi")
        , s = function(e) {
          var t = Object(a.__read)(Object(r.useState)(void 0), 2)
            , n = t[0]
            , s = t[1]
            , u = Object(a.__read)(Object(r.useState)(0), 2)
            , d = u[0]
            , p = u[1]
            , f = Object(r.useRef)(new Map)
            , m = Object(l.a)(e)
            , b = Object(r.useCallback)(function(e) {
              f.current = e,
              p(function(e) {
                  return ++e
              })
          }, [])
            , g = Object(r.useMemo)(function() {
              return m ? function(t) {
                  o.default.fetch.post("gantt/pos/sync", {
                      _projectId: e,
                      version: n,
                      data: {
                          insert: Array.from(t.entries())
                      }
                  }).subscribe(function(e) {
                      s(e.version)
                  })
              }
              : function() {}
          }, [m, e, n]);
          Object(r.useEffect)(function() {
              if (void 0 === n) {
                  var t = o.default.fetch.get("gantt/pos", {
                      _projectId: e
                  }).subscribe(function(e) {
                      n !== e.version && (b(new Map(e.pos)),
                      s(e.version))
                  });
                  return function() {
                      return t.unsubscribe()
                  }
              }
          }, [e, n, b]),
          Object(r.useEffect)(function() {
              var t = i.Observable.combineLatest(i.Observable.of(n), o.default.socketProxy.publish(":sync:ganttPos")).pipe(Object(c.filter)(function(e) {
                  var t = Object(a.__read)(e, 2);
                  return t[0] !== t[1].data.version
              }), Object(c.switchMap)(function() {
                  return o.default.fetch.get("gantt/pos", {
                      _projectId: e
                  })
              }), Object(c.tap)(function(e) {
                  n !== e.version && (b(new Map(e.pos)),
                  s(e.version))
              })).subscribe();
              return function() {
                  return t.unsubscribe()
              }
          }, [s, n, e, b]);
          var v = Object(r.useMemo)(function() {
              if (n)
                  return function(e) {
                      return f.current.get(e)
                  }
          }, [f, d, n])
            , h = Object(r.useMemo)(function() {
              return function(e) {
                  0 !== e.size && (e.forEach(function(e, t) {
                      f.current.set(t, e)
                  }),
                  g(e))
              }
          }, [f, g]);
          return {
              getPos: v,
              setPos: Object(r.useMemo)(function() {
                  return function(e) {
                      0 !== e.size && (h(e),
                      p(function(e) {
                          return ++e
                      }))
                  }
              }, [h, p]),
              savePos: h,
              ready: void 0 !== n
          }
      }
  },
  zkxgvHHN: function(e, t, n) {
      e.exports = {
          "auto-scheduling": "auto-scheduling__iHH2",
          "left-wrap": "left-wrap__3bmK",
          text: "text__qCAX",
          tip: "tip__3fLJ",
          "dropdown-scheduling": "dropdown-scheduling__2Dvl",
          "dropdown-scheduling-title": "dropdown-scheduling-title__27X8",
          "dropdown-scheduling-content": "dropdown-scheduling-content__3IjU"
      }
  }
}]);