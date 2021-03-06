using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ItemManagerService.Entities;
using System;
using ItemManagerService.Services;
using ItemManagerService.Models;
using Microsoft.AspNetCore.Authorization;
using MassTransit;
using Shared.MassTransit.Contracts;
using ItemContracts;
using Serilog;

namespace ItemManagerService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemManagerController : ControllerBase
    {
        private readonly IItemService _itemservice;
        private readonly ILogger _logger;

        public ItemManagerController(IItemService service, ILogger logger)
        {
            _itemservice = service;
            _logger = logger;
            _logger.Information("ItemManagerController Initiated");
        }

        [HttpGet]
        public async Task<IActionResult> GetItemEntities()
        {
            return Ok(await _itemservice.GetItems());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            return Ok(await _itemservice.GetSingle(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddItem([FromBody]Items item)
        {
            return Ok(await _itemservice.AddItem(item));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateItem(Items item)
        {
            return Ok(await _itemservice.UpdateItems(item));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            return Ok(await _itemservice.DeleteItem(id));
        }
    }
}
