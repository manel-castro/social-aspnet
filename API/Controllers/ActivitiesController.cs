
using Application.Activities;
using Domain;

using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
  public class ActivitiesController : BaseApiController
  {


    [HttpGet] // api/activities
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {

      return await Mediator.Send(new List.Query());
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
      return await Mediator.Send(new Details.Query { Id = id });

    }

    // When using IActionResult we don't need to specify the type of the thing we're returning, but it gives access to return statuses  
    //* [ApiController] is smart enough to know that it needs to look in the body of the request to get "Activity activity"
    [HttpPost]
    public async Task<IActionResult> CreateActgivity(Activity activity)
    {
      return Ok(await Mediator.Send(new Create.Command { Activity = activity }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id, Activity activity)
    {
      activity.Id = id;
      return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(Guid id)
    {
      return Ok(await Mediator.Send(new Delete.Command { Id = id }));
    }
  }
}